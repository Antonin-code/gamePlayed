import './style/header.css'
import './App.jsx'
import {Route, Routes, useNavigate} from "react-router-dom";
import Gamecards from "./image/GameCards.png";

function Header(){
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="container">
            <img className={"LogoHeader"} src={Gamecards} alt="GamecardsLogo" />
            <h1 className={"headerTitle"}>GameCards </h1>
            <li onClick={() => navigate("/Home")}>Home</li>
            <li onClick={() => navigate("/GameCards")}>Jeux</li>
            <li onClick={() => navigate("/SeriesCards")}>Séries</li>
            <li onClick={() => navigate("/MovieCards")}>Films</li>
            <li onClick={() => navigate("/Stats")}>Statistiques</li>
            <li onClick={() => navigate("/Account")}>Mon compte</li>
            <input className={"search"} type={"searchbar"}></input>
            <button className={"LogoutButton"}> Deconnexion </button>
            </div>

        </div>
    )
}

export default Header;