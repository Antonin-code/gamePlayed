import './App.jsx'
import './style/App.css'
import AddForm from "./AddForm.jsx"
import Cards from "./Cards.jsx"
import {useState,useEffect} from "react";

export function GameCards() {
    const [game, setGame] = useState([]);

    useEffect(() => {
        fetch ("http://localhost:8000/api/movies")
            .then(response => response.json())
        .then(data => setGame(data))

    })

    return (
        <>
        <h1 className={"AddGame"}>Ajouter un jeu </h1>
        <AddForm />
        <Cards />
        </>

    )
}

