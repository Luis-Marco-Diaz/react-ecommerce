import axios from "axios";
import { useEffect, useState } from "react";


const Location = ({newId}) => {
    
        const [Id2, setId2, ] = useState("");
            const onsubmit = (e) => {
            e.preventDefault();
            console.log({Id});
            if(Id2 === "" || Id2.toString) return;
            newId(Id2);
            } 

    
    
    const [ Id, setId ] = useState({});

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${Id2}`)
             .then(res => setId(res.data))
             .catch(error => console.error(error))
             
    }, [])


    return (

        <div>
            <div className="form" >
            <form onSubmit={onsubmit}>
                <div>
                    <input type="text" placeholder="Type a location Id (1 to 101)" onChange={(e) =>setId2(e.target.value)}/>
                    <button type="submit">Buscar por Id</button>
                </div>
             </form>
            </div>
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
            
        </div>

    );
}

export default Location;