import './App.jsx'
import './style/App.css'
import GameAddForm from "./gameAddForm.jsx"
import Cards from "./Cards.jsx"
import {useState, useEffect} from "react";

export function GameCards() {
    const [games, setGame] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/games")
            .then(response => response.json())
            .then(data => setGame(data))
    })

    const deleteGame = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/games/destroy/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",

                    },
                }
            );

            if (!response.ok) {
                throw new Error("Erreur lors de la suppression");
            }

            console.log("Jeu supprimé avec succès");

        } catch (error) {
            console.error(error);
        }
    };

return (
    <>
        <h1 className={"AddGame"}>Ajouter un jeu </h1>
        <GameAddForm/>

        <h1>Liste des jeux</h1>
        <div className={"cardAlignement"}>
            {games.map((game) => (

                <div key={game.id} className={"cards"}>
                    <h2>{game.name}</h2>
                    <p>Description : {game.description}</p>
                    <p> Temps de jeu : {String(game.playTime).split(':')[0]} Heures </p>
                    <p> Nombre de joueurs : {game.players}</p>

                    <button onClick={() => deleteGame(game.id)}>
                        Supprimer
                    </button>

                </div>
            ))}
        </div>
    </>

)
}

