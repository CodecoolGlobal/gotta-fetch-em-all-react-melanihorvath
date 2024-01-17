
import { useState } from 'react'
import Battle from './components/Battle';
import SelectLands from "./components/SelectLands"
import ChoosePoke from './components/ChoosePoke'

import './App.css'

function App() {
  const [landsIsSelected, setLandsIsSelected] = useState(false);
  const [pokeIsSelected, setPokeIsSelected] = useState(false);
  const [selectedLandURL, setSelectedLandURL] = useState();
  const [readyToPlay, setReadyToPlay] = useState(false);
  const [playersPokemon, setPlayersPokemon] = useState();
  const [area, setArea] = useState();
  const [enemy, setEnemyPokemon] = useState();
  console.log(playersPokemon)


  

  return (
    <div>
        { !landsIsSelected && !pokeIsSelected  &&  <SelectLands onEnemy={setEnemyPokemon} onArea={setArea} onLocationSelected={(locationURL)=>{setSelectedLandURL(locationURL) 
          setLandsIsSelected(true)}}/>}
        {landsIsSelected && !pokeIsSelected && !readyToPlay && <ChoosePoke onArea={area} onEnemy={enemy} onPokemon={setPlayersPokemon} onClickReady={setReadyToPlay}/>}
        {readyToPlay && (<Battle  readyToPlay={setReadyToPlay} onEnemy={enemy} onChoosenPokemon={playersPokemon} onPokeIsSelected={(pokeIsSelected) => setPokeIsSelected(pokeIsSelected)} onLandIsSelected={(landIsSelected) => setLandsIsSelected(landIsSelected)}/>)} 
      </div>
  )
}

export default App
