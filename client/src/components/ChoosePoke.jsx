import EnemyPoke from "./EnemyPoke";
import Backpack from "./Backpack";
import { useState } from "react";
import PlayerPokemon from "./PlayersPoke"



function ChoosePoke({ onClickReady, onPokemon, onArea, onEnemy }) {
  const [playersPokemon, setPlayersPokemon] = useState();
  const [enemyPokemon, setEnemyPokemon] = useState();
  console.log(onEnemy);

  const handleClick = () => {
    onPokemon(playersPokemon)
    onClickReady(true)
  }

  return (
    <div>
      <div>
        {onEnemy && <EnemyPoke onRandomEnemy={onEnemy} onArea={onArea}/>}
        {playersPokemon && <PlayerPokemon onLoad={playersPokemon} />}
      </div>
      <div>
        <Backpack onChoose={setPlayersPokemon} />
      </div>
      {playersPokemon && <button onClick={handleClick}>Start the fight</button>}
    </div>
  );
}

export default ChoosePoke;