import "./Header.jsx"
import "./App.jsx"
import "./style/Cards.css"
import AddForm from "./AddForm.jsx";
import {useEffect, useState} from "react";

export function MovieCards() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/movies")
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, []);



    return (
        <>
            <h1 className={"AddGame"}>Ajouter un Film </h1>
            <AddForm/>

            <button type="submit" onClick={}>Ajouter</button>

            <h1>Liste des films</h1>
            {movies.map(movie => (
                <div className={"cards"} key={movie.id}>
                    <h2>{movie.name}</h2>
                    <p>{movie.description}</p>
                    <p>{movie.rating}</p>
                    <p>{movie.release_date}</p>
                </div>

            ))}
        </>

    );
}