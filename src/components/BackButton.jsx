import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    return (
        // using navigate hook with "-1" simulates hitting the back button
        <button className="backButton" onClick={e => { navigate(-1) }}>Back</button>
    );
}