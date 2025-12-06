import './App.jsx'
import './style/App.css'

function AddForm(){
    return(
        <>
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Temps de jeu" />
            <input type="text" placeholder="Joueurs" />
            <input type="text" placeholder="Image" />
            <button type="submit">Ajouter</button>

        </>

    )
}

export default AddForm
