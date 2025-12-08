import './App.jsx'
import './style/App.css'
import AddForm from "./AddForm.jsx"
import Cards from "./Cards.jsx"

export function GameCards() {

    return (
        <>
        <h1 className={"AddGame"}>Ajouter un jeu </h1>
        <AddForm />
        <Cards />
        </>

    )
}

