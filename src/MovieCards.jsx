import "./Header.jsx"
import "./App.jsx"
import "./style/Cards.css"
import {useEffect, useState} from "react";
import MovieAddForm from "./movieAddForm.jsx";

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
            <MovieAddForm/>

            <h1>Liste des films</h1>
            <div className={"cardAlignement"}>
            {movies.map(movie => (
                <div className={"cards"} key={movie.id}>
                    <h2>{movie.name}</h2>
                    <p>Description : {movie.description}</p>
                    <p>Note : {movie.rating}</p>
                    <p>Date de Sortie : {movie.release_date}</p>
                </div>

            ))}
            </div>
        </>

    );
}