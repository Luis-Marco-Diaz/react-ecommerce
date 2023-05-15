import axios from "axios";
import { useEffect, useState } from "react";


const Location = () => {

    const [ Id, setId ] = useState({});


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/3')
             .then(res => setId(res.data));
    }, [])

    return (

        <div className='Location-Data'>
            <div>
                <h3> Name: <br /> {Id.name} </h3>
            </div>
            <div>
                <h3> Type: <br /> {Id.type} </h3>
            </div>
            <div>
                <h3> Dimension: <br /> {Id.dimension} </h3>
            </div>
            <div>
                <h3> Population: <br /> {(Id.residents)?.length} </h3>
            </div>
        </div>

    );
}

export default Location;