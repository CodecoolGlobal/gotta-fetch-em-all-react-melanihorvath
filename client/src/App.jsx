
import { useState } from 'react'
import Battle from './components/Battle';
import SelectLands from "./components/SelectLands"
import ChoosePoke from './components/ChoosePoke'

import './App.css'

function App() {
  const [landsIsSelected, setLandsIsSelected] = useState(false);
  const [pokeIsSelected, setPokeIsSelected] = useState(false);
  const [selectedLandURL, setSelectedLandURL] = useState()
  const [readyToPlay, setReadyToPlay] = useState(false)
  const [playersPokemon, setPlayersPokemon] = useState()
  console.log(playersPokemon)


  

  return (
    <div>
        { !landsIsSelected && !pokeIsSelected  &&  <SelectLands onLocationSelected={(locationURL)=>{setSelectedLandURL(locationURL) 
          setLandsIsSelected(true)}}/>}
        {landsIsSelected && !pokeIsSelected && !readyToPlay && <ChoosePoke onPokemon={setPlayersPokemon} onClickReady={setReadyToPlay}/>}
        {readyToPlay && (<Battle onChoosenPokemon={playersPokemon} onPokeIsSelected={(pokeIsSelected) => setPokeIsSelected(pokeIsSelected)} onLandIsSelected={(landIsSelected) => setLandsIsSelected(landIsSelected)}/>)} 
      </div>
  )
}

export default App
