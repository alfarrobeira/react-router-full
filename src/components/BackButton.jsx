import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    return (
        <button className="backButton" onClick={e => { navigate(-1) }}>Back</button>
    );
}