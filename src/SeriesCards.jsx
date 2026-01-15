import "./Header.jsx"
import "./App.jsx"
import "./style/Cards.css"
import {useEffect, useState} from "react";
import SerieAddForm from "./serieAddForm.jsx";

export function SeriesCards() {
    const [serie, setSerie] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/series/")
            .then(response => response.json())
            .then(data => setSerie(data))
    })


    const deleteSerie = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/series/destroy/${id}`,
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

            console.log("Série supprimée avec succès");

        } catch (error) {
            console.error(error);
        }
    };


    document.querySelectorAll('.cards.active')
    .forEach(c => c.classList.remove('active'))

    return (
        <>
            <h1 className={"AddGame"}>Ajouter une Série </h1>
            <SerieAddForm/>

            <h2 className={"list"}>Liste des series</h2>
            <div className={"cardAlignement"}>
            {serie.map(series => (
                <div className={"cards"} key={series.id}>
                    <h2>{series.title}</h2>
                    <p>Description : {series.description}</p>
                    <p>Nombre de saisons : {series.duration}</p>
                    <p>Date de sortie : {series.release_date}</p>
                    <p>Note : {series.rating}</p>

                    <button className={"suppButton"} onClick={() => deleteSerie(series.id)}>
                        Supprimer
                    </button>

                </div>

            ))}
            </div>
        </>

    );
}