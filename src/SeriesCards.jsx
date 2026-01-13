import "./Header.jsx"
import "./App.jsx"
import "./style/Cards.css"
import {useEffect, useState} from "react";
import MovieAddForm from "./movieAddForm.jsx";
import SerieAddForm from "./serieAddForm.jsx";

export function SeriesCards() {
    const [serie, setSerie] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/series/")
            .then(response => response.json())
            .then(data => setSerie(data))
    }, []);
    return (
        <>
            <h1 className={"AddGame"}>Ajouter une Série </h1>
            <SerieAddForm/>

            <h2>Liste des series</h2>
            <div className={"cardAlignement"}>
            {serie.map(series => (
                <div className={"cards"} key={series.id}>
                    <h2>{series.title}</h2>
                    <p>Description : {series.description}</p>
                    <p>Date de sortie : {series.release_date}</p>
                    <p>Note : {series.rating}</p>

                </div>

            ))}
            </div>
        </>

    );
}