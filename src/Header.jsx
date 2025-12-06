import './header.css'
import './App.jsx'
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <li onClick={() => navigate("/Account")}>Mon compte</li>
        </div>
    )
}

export default Header;