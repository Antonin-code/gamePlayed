import './App.jsx'
import './style/Cards.css'
import {useState} from 'react'


function SerieAddForm(){
    const [data, setData] = useState({
        name: "",
        description:"",
        duration: "",
        release_date:"",
        rating: "",

    })



    // const clearFields = () => {
    //     setData({
    //         name: "",
    //         description: "",
    //         playTime: "",
    //         players: "",
    //     });
    // };


    // const
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     clearFields();
    //
    // }



    return(
        <>
            <div className={"formAjout"}>
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Description" />
                <input type="number" placeholder="Nombre de saisons vues" />
                <input type="date" placeholder="Date de Sortie" />
                <input type="text" placeholder="Image" />
            </div>
        </>

    )
}

export default SerieAddForm
