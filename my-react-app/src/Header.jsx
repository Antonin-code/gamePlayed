import './header.css'
import './App.jsx'
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <href onClick={() => navigate("/Account")}>Mon compte</href>
        </div>
    )
}

export default Header;