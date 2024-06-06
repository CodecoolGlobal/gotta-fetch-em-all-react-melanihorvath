import EnemyPoke from "./components/DisplayEnemyPoke";
import Backpack from "./Backpack";
import { useState } from "react";
import PlayerPokemon from "./components/DisplayPlayersPoke"



function ChoosePoke({ onClickReady, onPokemon, onArea, onEnemy }) {
  const [playersPokemon, setPlayersPokemon] = useState();

  const handlePokemonSelection = (selectedPokemon) => {
    setPlayersPokemon(selectedPokemon);
  };

  const handleStartFight = () => {
    onPokemon(playersPokemon);
    onClickReady(true);
  };

  return (
    <div>
      <div className="choosenPokemons">
        {onEnemy && <EnemyPoke onRandomEnemy={onEnemy} onArea={onArea} />}
        {playersPokemon && <PlayerPokemon onLoad={playersPokemon} />}
      </div>
      <div>
        <Backpack onChoose={handlePokemonSelection} />
      </div>
      {playersPokemon && (
        <button className="startTheFight" onClick={handleStartFight}>
          Start the fight!
        </button>
      )}
    </div>
  );
}

export default ChoosePoke;