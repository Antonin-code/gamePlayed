import "./style/Home.css"
import "./App.jsx"
import { useNavigate } from "react-router-dom";

export function Signin() {

    const navigate = useNavigate();

    return(
        <>

            <div className="Fromulaire">
            <h1>Bienvenue sur GameCards</h1>

            <input type={"text"} placeholder={"nom d utilisateur"}  />

            <input type={"password"} placeholder={"Mot de passe"} />

            <input type={"password"} placeholder={"Confirmer Mot de passe"} />

            <button className={"LoginButton"} onClick={Signin}>S'inscrire</button>

            <button onClick={() => navigate("/Login")}>Se connecter</button>

            </div>
        </>
    )
}