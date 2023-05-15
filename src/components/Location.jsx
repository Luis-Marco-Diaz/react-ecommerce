import axios from "axios";
import { useEffect, useState } from "react";


const Location = () => {

    const [ Id, setId ] = useState({});


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/3')
             .then(res => setId(res.data));
    }, [])

    return (

        <div>
            <h3>
                Name: {Id.name}
            </h3>
            <h3>
                Type: {Id.type}
            </h3>
            <h3>
                Dimension: {Id.dimension}
            </h3>
            <h3>
                Population: {(Id.residents)?.length}
            </h3>
        </div>

    );
}

export default Location;