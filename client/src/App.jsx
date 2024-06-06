
import { useState } from 'react'
import Battle from './pages/Battle';
import SelectLands from "./pages/SelectLands"
import ChoosePoke from './pages/ChoosePoke'

import './App.css'

function App() {
  const [landsIsSelected, setLandsIsSelected] = useState(false);
  const [pokeIsSelected, setPokeIsSelected] = useState(false);
  const [selectedLandURL, setSelectedLandURL] = useState();
  const [readyToPlay, setReadyToPlay] = useState(false);
  const [playersPokemon, setPlayersPokemon] = useState();
  const [area, setArea] = useState();
  const [enemy, setEnemyPokemon] = useState();
  console.log(enemy)


  

  return (
    <div className='mainpage'>
        { !landsIsSelected && !pokeIsSelected  && <SelectLands onEnemy={setEnemyPokemon} onArea={setArea} onLocationSelected={(locationURL)=>{setSelectedLandURL(locationURL) 
          setLandsIsSelected(true)}}/>}
        { landsIsSelected && enemy === "no poke" && !pokeIsSelected && !readyToPlay && <><div><h1>no poke here</h1><button onClick={() => {setLandsIsSelected(false); setPokeIsSelected(false); setEnemyPokemon()}}>Select new path...</button></div></>}
        {landsIsSelected && !pokeIsSelected && !readyToPlay && enemy !== "no poke" &&  <ChoosePoke onArea={area} onEnemy={enemy} onPokemon={setPlayersPokemon} onClickReady={setReadyToPlay}/> }
        {readyToPlay && (<Battle  setEnemy={setEnemyPokemon} readyToPlay={setReadyToPlay} onEnemy={enemy} onChoosenPokemon={playersPokemon} onPokeIsSelected={(pokeIsSelected) => setPokeIsSelected(pokeIsSelected)} onLandIsSelected={(landIsSelected) => setLandsIsSelected(landIsSelected)}/>)} 
      </div>
  )
}

export default App
