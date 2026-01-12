import './App.jsx'
import './style/App.css'
import AddForm from "./AddForm.jsx"
import Cards from "./Cards.jsx"
import {useState,useEffect} from "react";

export function GameCards() {
    const [games, setGame] = useState([]);

    useEffect(() => {
        fetch ("http://localhost:8000/api/games")
        .then(response => response.json())
        .then(data => setGame(data))
    })

    return (
        <>
        <h1 className={"AddGame"}>Ajouter un jeu </h1>
        <AddForm />
            <h1>Liste des jeux</h1>
            {games.map((game) => (
                <div key={game.id} className={"cards"}>
                    <p>{game.name}</p>
                    <p>{game.description}</p>
                    <p>{game.playTime}</p>
                    <p>{game.players}</p>
                </div>
            ))}
        </>

    )
}

