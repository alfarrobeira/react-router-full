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
        <NavLink className="link" to="/students" end>Students</NavLink>
      </nav>
      <div className="Instructions">
        <div className="block">
          <Routes>
            <Route path="students" element={<Students />} />
            <Route path="students/:id" element={<Student />} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
