import './style/App.css'
import Header from "./Header.jsx";
import {Route, Routes} from "react-router-dom";
import {Account} from "./Account.jsx";
import {GameCards} from "./GameCards.jsx";
import {SeriesCards} from "./SeriesCards.jsx";
import {MovieCards} from "./MovieCards.jsx";
import {Stats} from "./Stats.jsx";
import {Home} from "./Home.jsx";
import {Login} from "./Login.jsx";
import {Signin} from "./Signin.jsx";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/Home/" element={<Home />}/>
                <Route path="/GameCards/" element={<GameCards />}/>
                <Route path="/SeriesCards/" element={<SeriesCards />}/>
                <Route path="/MovieCards/" element={<MovieCards />}/>
                <Route path="/Stats/" element={<Stats />}/>
                <Route path="/Account/" element={<Account />}/>
                <Route path="/Signin/" element={<Signin />}/>
                <Route path="/Login/" element={<Login />}/>
            </Routes>

        </>

    )
}

export default App