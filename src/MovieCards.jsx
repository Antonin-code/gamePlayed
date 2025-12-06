import "./Header.jsx"
import "./App.jsx"
import "./style/Cards.css"
import AddForm from "./AddForm.jsx";

export function MovieCards(){
    return (
        <>
            <h1 className={"AddGame"}>Ajouter un Film </h1>
            <AddForm />
        </>
    )
}