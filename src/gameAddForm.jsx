import './App.jsx'
import './style/Cards.css'
import {useState} from 'react'


function GameAddForm() {
    const [data, setData] = useState({
        name: "",
        description: "",
        playTime: "",
        players: "",
    });

    // Fonction appelée à chaque modification d’un champ du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const clearFields = () => {
        setData({
            name: "",
            description: "",
            playTime: "",
            players: "",
        });
    };


    // Fonction appelée lors de la soumission du formulaire
    const handleSubmit = async (e) => {

        e.preventDefault();
        clearFields();

        try {
            const response = await fetch("http://localhost:8000/api/games/store", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Erreur lors de l’ajout du jeu :", error);
        }
    };

    return (
        <form className="formAjout" onSubmit={handleSubmit}>

            <input type="text" name="name" placeholder="Nom" value={data.name} onChange={handleChange}/>

            <input type="text" name="description" placeholder="Description" value={data.description} onChange={handleChange}/>

            <input type="number" name="playTime" placeholder="Temps de jeu" value={data.playTime} onChange={handleChange}/>

            <input type="number" name="players" placeholder="Joueurs" value={data.players} onChange={handleChange}/>

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default GameAddForm;

