import './App.jsx'
import './style/Cards.css'

function AddForm(){
    return(
        <>
            <div className={"formAjout"}>
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Temps de jeu" />
            <input type="text" placeholder="Joueurs" />
            <input type="text" placeholder="Image" />
            <button type="submit">Ajouter</button>
            </div>
        </>

    )
}

export default AddForm
