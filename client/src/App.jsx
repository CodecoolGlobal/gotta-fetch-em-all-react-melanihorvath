
import { useState } from 'react'
import Battle from './components/Battle';
import SelectLands from "./components/SelectLands"
import ChoosePoke from './components/ChoosePoke'

import './App.css'

function App() {
  const [landsIsSelected, setLandsIsSelected] = useState(false);
  const [pokeIsSelected, setPokeIsSelected] = useState(false);
  const [selectedLandURL, setSelectedLandURL] = useState()
  

  return (
    <div>
        { !landsIsSelected && !pokeIsSelected  &&  <SelectLands onLocationSelected={(locationURL)=>{setSelectedLandURL(locationURL)
        setLandsIsSelected(true)}}/>}
        {landsIsSelected && !pokeIsSelected && <ChoosePoke />}
        {landsIsSelected && pokeIsSelected ? (<Battle onPokeIsSelected={(pokeIsSelected) => setPokeIsSelected(pokeIsSelected)} onLandIsSelected={(landIsSelected) => setLandsIsSelected(landIsSelected)}/>) : (<div>SelectLands</div>)} 
      </div>
  )
}

export default App
