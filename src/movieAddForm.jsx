import './App.jsx'
import './style/Cards.css'
import {useState} from 'react'


function MovieAddForm(){
    const [data, setData] = useState({
        title : "",
        description : "",
        release_date : "",
        rating : ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const clearFields = () => {
        setData({
            title: "",
            description: "",
            release_date: "",
            rating: "",
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        clearFields();
        try {
            const response = await fetch("http://localhost:8000/api/movies/store", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Erreur lors de l’ajout du film :", error);
        }
    };


    return(
        <>
            <form className="formAjout" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Titre" value={data.title} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={data.description} onChange={handleChange} />
                <input type="text" name="release_date" placeholder="Date de sortie" value={data.release_date} onChange={handleChange} />
                <input type="number" name="rating" placeholder="Note / 10" value={data.rating} onChange={handleChange} />

                <button type="submit">Ajouter</button>
            </form>
        </>

    )
}

export default MovieAddForm
