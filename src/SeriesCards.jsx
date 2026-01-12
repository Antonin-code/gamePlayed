import "./Header.jsx"
import "./App.jsx"
import "./style/Cards.css"
import AddForm from "./AddForm.jsx";
import {useEffect, useState} from "react";

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
            <AddForm/>

            <h2>Liste des series</h2>
            {serie.map(series => (
                <div className={"cards"} key={series.id}>
                    <p>{series.title}</p>
                    <p>{series.description}</p>
                    <p>{series.release_date}</p>
                    <p>{series.rating}</p>

                </div>

            ))}
        </>

    );
}