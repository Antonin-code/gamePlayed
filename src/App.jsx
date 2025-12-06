import './style/App.css'
import Header from "./Header.jsx";
import {Route, Routes} from "react-router-dom";
import {Account} from "./Account.jsx";
import {GameCards} from "./GameCards.jsx";

function App() {


    return (
        <>
            <p>Hello</p>
            <Header />

            <Routes>
                <Route path="/Account/" element={<Account />}/>
                <Route path="/GameCards/" element={<GameCards />}/>
            </Routes>

        </>


    )
}

export default App