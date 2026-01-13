import "./App.jsx"
import "./style/Home.css"
import {useState, useEffect} from "react"

export function Home() {
    const [countGame, setCount] = useState(0);
    const [countMovie, setCountMovie] = useState(0);
    const [countSerie, setCountSerie] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8000/api/home")
            .then(res => res.json())
            .then(data => setCount(data))
    })

    useEffect(() => {
        fetch("http://localhost:8000/api/home2")
            .then(res => res.json())
            .then(data => setCountMovie(data))
    })

    useEffect(() => {
        fetch("http://localhost:8000/api/home3")
            .then(res => res.json())
            .then(data => setCountSerie(data))
    })


    return (
        <div className="Home">
            <h1 className={"title"}> Bonjour ...</h1>
            <div className="stats">
                <p> Vous avez Joué a {countGame} Jeux</p>
                <p> Vous avez regardé {countMovie} Films</p>
                <p> Vous avez regardé {countSerie} Séries</p>

                <p> Au total ... Heures de Jeux</p>
                <p> Au total ... Heures de Films</p>
                <p> Au total ... Heures de Séries</p>

            </div>
        </div>
    )
}