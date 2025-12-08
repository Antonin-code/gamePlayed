import "./style/Home.css"
import "./App.jsx"
import { useNavigate } from "react-router-dom";

export function Login() {

    const navigate = useNavigate();

    return(
        <>
            <div className="Fromulaire">
            <h1>Bienvenue sur GameCards</h1>

            <input type={"text"} placeholder={"nom d utilisateur"}  />

            <input type={"password"} placeholder={"Mot de passe"} />

            <button className={"LoginButton"} onClick={Login}>Login</button>

            <button onClick={() => navigate("/Signin")}>S'inscrire</button>

            </div>
        </>
    )
}