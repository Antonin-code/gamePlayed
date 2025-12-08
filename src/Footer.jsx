import "./style/Footer.css"
import "./App.jsx"
import Gamecards from './image/Gamecards.png';

export function Footer() {
    return (

        <div className="navbarfoot">
        <div className="footainer">
            <p> 2025 - 2026</p>
            <p> Coding-Factory</p>
            <img src={Gamecards} alt="GamecardsLogo" />
        </div>
        </div>
    )
}