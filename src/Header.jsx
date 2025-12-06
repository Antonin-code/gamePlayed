import './style/header.css'
import './App.jsx'
import {Route, Routes, useNavigate} from "react-router-dom";
import {Account} from "./Account.jsx";

function Header(){
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="container">
            <h1>GameCards </h1>
            <li onClick={() => navigate("/Account")}>Mon compte</li>
            <li onClick={() => navigate("/GameCards")}>Jeux</li>
            <li onClick={() => navigate("/SeriesCards")}>Séries</li>
            <li onClick={() => navigate("/MovieCards")}>Films</li>
            <input type={"searchbar"}></input>
            </div>

        </div>
    )
}

export default Header;