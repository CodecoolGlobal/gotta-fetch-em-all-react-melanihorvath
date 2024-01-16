import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch';
import DisplayLands from './DisplayLands';
import randomArea from './RandomArea';


function SelectLands(props) {
  const apiLandsKEY = 'https://pokeapi.co/api/v2/location'
  const { data, isPending, error } = UseFetch(apiLandsKEY)
  const [lands, setLands] = useState([])
  const area = props.onArea;

  useEffect(() => {
    if (data) {
      setLands(data.results);
    }
  }, [data])

  const handleClick = (e) => {
    const apiLocationsKEY = 'https://pokeapi.co/api/v2/location/';
    randomArea(apiLocationsKEY + e.target.innerText)
    return props.onLocationSelected(apiLocationsKEY + e.target.innerText)
  }

  function randomArea(url){

      fetch(url)
        .then(res => res.json())
        .then(data => {
          area(data.areas[Math.ceil(Math.random() * data.areas.length)-1].url)
        })
      }
    
  
  


  return (
    <div>
      {error && <div> {error} </div>}
      {isPending && <p>Loading the lands</p>}
      {data && <DisplayLands lands={lands} title={"Pokemon Lands"} onClick={handleClick} />}
    </div>
  );
}

export default SelectLands;
