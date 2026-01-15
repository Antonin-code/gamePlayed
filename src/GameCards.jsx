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


    document.querySelectorAll('.cards').forEach(cards => {

        cards.addEventListener('click', () => {
            document.querySelectorAll('.cards.active').forEach(c => c.classList.remove('active'));
            cards.classList.add('active')
        });

    });

return (
    <>
        <h1 className={"AddGame"}>Ajouter un jeu </h1>
        <GameAddForm/>

        <h2 className={"list"}>Liste des jeux</h2>
        <div className={"cardAlignement"}>
            {games.map((game) => (

                <div key={game.id} className={"cards"}>
                    <h1>{game.name}</h1>
                    <p>Description : {game.description}</p>
                    <p> Temps de jeu : {String(game.playTime).split(':')[0]} Heures </p>
                    <p> Nombre de joueurs : {game.players}</p>
                    <button className={"suppButton"} onClick={() => deleteGame(game.id)}>Supprimer</button>
                </div>

            ))}
        </div>
    </>

)
}

