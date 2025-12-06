import "./Header.jsx"
import "./App.jsx"
import "./style/Cards.css"
import AddForm from "./AddForm.jsx";

export function SeriesCards(){
    return (
        <>
            <h1 className={"AddGame"}>Ajouter une Série </h1>
            <AddForm />
        </>
    )
}