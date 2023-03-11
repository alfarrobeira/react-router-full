import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Instructions from "./components/Instructions";
import Students from "./components/Students";
import Student from "./components/Student";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <nav>
        {/* NavLink allows for additional styling when it is active */}
        {/* end property: only match isActive on the exact link - not for children */}
        <NavLink className="link" to="/students" end>Students</NavLink>
      </nav>
      <div className="Instructions">
        <div className="block">
          <Routes>
            <Route path="students" element={<Students />} />
            {/* ":" handles all general routes below the students path */}
            <Route path="students/:id" element={<Student />} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
