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
    })


    const deleteMovie = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/movies/destroy/${id}`,
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

            console.log("Film supprimée avec succès");

        } catch (error) {
            console.error(error);


        }
    };

    return (
        <>
            <h1 className={"AddGame"}>Ajouter un Film </h1>
            <MovieAddForm/>

            <h2 className={"list"}>Liste des films</h2>
            <div className={"cardAlignement"}>
            {movies.map(movie => (
                <div className={"cards"} key={movie.id}>
                    <h1>{movie.title}</h1>
                    <p>Description : {movie.description}</p>
                    <p>Note : {movie.rating}</p>
                    <p>Date de Sortie : {movie.release_date}</p>

                <button className={"suppButton"} onClick={() => deleteMovie(movie.id)}>
                Supprimer
                </button>

                </div>
            ))}
            </div>
        </>

    )
}