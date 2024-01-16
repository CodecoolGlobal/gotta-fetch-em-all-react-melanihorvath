
import { useState } from 'react'
import Battle from './components/Battle';

import './App.css'

function App() {
const [landsIsSelected, setLandsIsSelected] = useState(true);
const [pokeIsSelected, setPokeIsSelected] = useState(true);

  return (
    <>
      <div>
        {landsIsSelected && pokeIsSelected ? (<Battle onPokeIsSelected={(pokeIsSelected) => setPokeIsSelected(pokeIsSelected)} onLandIsSelected={(landIsSelected) => setLandsIsSelected(landIsSelected)}/>) : (<div></div>)} 
      </div>
    </>
  )
}

export default App
