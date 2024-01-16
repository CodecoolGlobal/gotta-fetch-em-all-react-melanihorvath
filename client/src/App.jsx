
import { useState } from 'react'
import Battle from './components/Battle';

import './App.css'

function App() {
const [landsIsSelected, setLandsIsSelected] = useState(false);
const [pokeIsSelected, setPokeIsSelected] = useState(false);

  return (
    <>
      <div>
        {landsIsSelected && pokeIsSelected ? (<Battle/>) : (<div>asd</div>)} 
      </div>
    </>
  )
}

export default App
