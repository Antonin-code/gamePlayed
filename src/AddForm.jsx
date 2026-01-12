import './App.jsx'
import './style/Cards.css'
import {useState, useEffect} from 'react'


function AddForm(){
    const [data, setData] = useState([
        "name",
        "description",
        "rating",
        "release_date"

    ])

    const [movie, setMovies] = useState('')

    useEffect(() => {
        fetch("http://localhost:8000/api/games/store")
            .then(response => response.json())
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    })


    return(
        <>
            <div className={"formAjout"}>
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Temps de jeu" />
            <input type="text" placeholder="Joueurs" />
            <input type="text" placeholder="Image" />
            </div>
        </>

    )
}

export default AddForm
