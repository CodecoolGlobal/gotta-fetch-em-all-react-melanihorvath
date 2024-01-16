import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch';
import DisplayLands from './DisplayLands';


function SelectLands(props) {
    const apiLandsKEY = 'https://pokeapi.co/api/v2/location'
    const {data, isPending, error} = UseFetch(apiLandsKEY)
    const [lands, setLands] = useState([])
   
    useEffect(()=>{
        if(data){
            setLands(data.results);
        }
    }, [data])

    const handleClick = (e) =>{
        const apiLocationsKEY = 'https://pokeapi.co/api/v2/location/'
        return props.onLocationSelected(apiLocationsKEY + e.target.innerText)
    }

    
    return (
        <div>
            {error && <div> { error } </div>}
            { isPending && <p> "Loading the lands"</p> }
            {data && <DisplayLands lands={lands} title={"Pokemon Lands"} onClick={handleClick}/> }
            
        </div>
    );
}

export default SelectLands;
