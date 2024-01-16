import EnemyPoke from "./EnemyPoke";
import Backpack from "./Backpack";
import { useState } from "react";
import PlayerPokemon from "./PlayersPoke"


function ChoosePoke({onClickReady, onPokemon}) {
    const [playersPokemon, setPlayersPokemon] = useState()
    console.log(playersPokemon)

    const handleClick = () =>{
        onPokemon(playersPokemon) 
        onClickReady(true)
    }

    return (
        <div>
            <div>
                {/* <EnemyPoke /> */}
                {playersPokemon && <PlayerPokemon onLoad={playersPokemon} />}
            </div>
            <div>
                <Backpack onChoose={setPlayersPokemon}/>
            </div>
            {playersPokemon && <button onClick={handleClick}>Start the fight</button>}
        </div>
    );
}

export default ChoosePoke;