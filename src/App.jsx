import './style/App.css'
import Header from "./Header.jsx";
import {Route, Routes} from "react-router-dom";
import {Account} from "./Account.jsx";
import {GameCards} from "./GameCards.jsx";
import {SeriesCards} from "./SeriesCards.jsx";
import {MovieCards} from "./MovieCards.jsx";

function App() {


    return (
        <>
            <Header />
            <Routes>
                <Route path="/Account/" element={<Account />}/>
                <Route path="/GameCards/" element={<GameCards />}/>
                <Route path="/SeriesCards/" element={<SeriesCards />}/>
                <Route path="/MovieCards/" element={<MovieCards />}/>
            </Routes>

        </>

    )
}

export default App