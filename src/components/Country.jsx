import axios from "axios";
import { useEffect, useState } from "react";

const Country = () => {

    // El estado lo nombramos de acuerdo a lo que recibamos en la API
    const [ counrty, setId ] = useState({});
    
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/3')
             .then(res => setId(res.data));
    }, [])  

    console.log(counrty);

    return (
        <div>
            <h1>Rick and Morty World Search</h1>
            <section>
                <h2>{counrty[0]?.name.common}</h2>
                
            </section>
        </div>
    );
};

export default Country;

