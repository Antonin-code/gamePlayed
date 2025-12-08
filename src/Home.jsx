import "./App.jsx"
import "./style/Home.css"

export function Home() {
    return (
        <div className="Home">
            <h1 className={"title"}> Bonjour ...</h1>
            <p> Vous avez Joué ... Jeux</p>
            <p> Vous avez regardé ... Films</p>
            <p> Vous avez regardé ... Séries</p>

            <p> Au total  ... Heures de Jeux</p>
            <p> Au total  ... Heures de Films</p>
            <p> Au total  ... Heures de Séries</p>

        </div>
    )
}