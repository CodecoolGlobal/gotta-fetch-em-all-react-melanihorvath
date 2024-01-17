import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch';
import DisplayLands from './DisplayLands';


function SelectLands(props) {
  const apiLandsKEY = 'https://pokeapi.co/api/v2/location'
  const { data, isPending, error } = UseFetch(apiLandsKEY)
  const [lands, setLands] = useState([])
  const area = props.onArea;
  const enemy = props.onEnemy

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
          console.log(data)
          data.areas.length !== 0 ? randomEnemyUrl(data.areas[Math.ceil(Math.random() * data.areas.length)-1].url) : enemy(null)
        })
      }
    
  function randomEnemyUrl(url){

    fetch(url)
      .then(res => res.json())
      .then(data => {
        enemyObj(data.pokemon_encounters[Math.ceil(Math.random() * data.pokemon_encounters.length)-1].pokemon.url)
      })
  }

  function enemyObj(url){

    fetch(url)
      .then(res => res.json())
      .then(data => {
        enemy(data)
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
