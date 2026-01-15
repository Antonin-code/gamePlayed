import './App.jsx'
import './style/Cards.css'
import {useState} from 'react'


function SerieAddForm(){
    const [data, setData] = useState({
        title: "",
        description:"",
        duration: "",
        release_date:"",
        rating: "",

    })

    const clearFields = () => {
        setData({
            title: "",
            description: "",
            duration: "",
            release_date:"",
            rating: "",
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearFields();
        try {
            const response = await fetch("http://localhost:8000/api/series/store", {
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
            console.error("Erreur lors de l’ajout de la série :", error);
        }
    };

    return(
        <>
            <form className={"formAjout"} onSubmit={handleSubmit}>
                <div className="input">
                <input type="text" name="title" placeholder="Nom" value={data.title} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={data.description} onChange={handleChange} />
                <input type="number" name="duration" placeholder="Nombre de saisons vues" value={data.duration} onChange={handleChange} />
                <input type="text" name="release_date" placeholder="Date de sortie" value={data.release_date} onChange={handleChange} />
                <input type="number" name="rating" placeholder="Note / 10" value={data.rating} onChange={handleChange} />
                </div>

                <button className={"addButton"} type="submit">Ajouter</button>
            </form>
        </>

    )
}

export default SerieAddForm
