import './style/App.css'
import Header from "./Header.jsx";
import {Route, Routes} from "react-router-dom";
// import {Account} from "./Account.jsx";
// import {Account} from "./Account.jsx";
// import {Account} from "./Account.jsx";
import {Account} from "./Account.jsx";

function App() {


    return (
        <>
            <p>Hello</p>
            <Header />

            <Routes>
                <Route path="/Account/" element={<Account />}/>

            </Routes>

        </>


    )
}

export default App