import { useEffect, useState } from "react";

function Battle({onPokeIsSelected : pokeIsSelected, 
  onLandIsSelected : landIsSelected,  
  onChoosenPokemon : playerPokemon,
  onEnemy :enemyPokemon,
  readyToPlay, 
  setEnemy : setEnemyToDefault}) {


  const [enemy, setEnemy] = useState(null);
  const [friendly, setFriendly] = useState(null);
  const [result, setResult] = useState(null)
  const [friendlyHp, setFriendlyHp] = useState(null);
  const [enemyHp, setEnemyHp] = useState(null);
  const [maxEnemyHp, setMaxEnemyHp] = useState(null);
  const [maxFriendlyHp, setMaxFriendlyHp] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + enemyPokemon.name)
      .then(res => res.json())
      .then(data => {
        setEnemy(data)
        setEnemyHp(getStat(data, "hp"))
        setMaxEnemyHp(getStat(data, "hp"))
      })
      fetch("https://pokeapi.co/api/v2/pokemon/" + playerPokemon.name)
      .then(res => res.json())
      .then(data => {
        setFriendly(data)
        setFriendlyHp(getStat(data, "hp"))
        setMaxFriendlyHp(getStat(data, "hp"))
      })

  }, []);

  function handleBattle() {
    if (!enemy || !friendly || friendlyHp <= 0 || enemyHp <= 0) return;
  
    const fDamage = calculateDamage(friendly, enemy);
    const updatedEnemyHp = Math.max(enemyHp - fDamage, 0);
    setEnemyHp(updatedEnemyHp);
    animateAttack('.friendly-image');
  
    if (updatedEnemyHp > 0) {
      const eDamage = calculateDamage(enemy, friendly);
      const updatedFriendlyHp = Math.max(friendlyHp - eDamage, 0);
      setFriendlyHp(updatedFriendlyHp);
      animateAttack('.enemy-image');
  
      if (updatedFriendlyHp < 1) {
        setResult("lost");
      }
    } else {
      setResult("winner");
    }
  }
  
  const calculateDamage = (attacker, defender) => {
    const attack = getStat(attacker, "attack");
    const defense = getStat(defender, "defense");
    return Math.floor(((((2 / 5 + 2) * attack * 60 / defense) / 50) + 2) * randomNumber() / 255);
  };
  
  const animateAttack = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add('moved');
      setTimeout(() => {
        element.classList.remove('moved');
      }, 500);
    }
  };
  
  function randomNumber() {
    return Math.floor(Math.random() * (255 - 217 + 1)) + 217
  }

  function getStat(pokemon, type) {
    const Stat = pokemon.stats.find(stat => stat.stat.name === `${type}`);

    if (Stat) {
      return Number(Stat.base_stat);
    }
  }

  function handleAgain() {
    pokeIsSelected(false);
    landIsSelected(false);
    readyToPlay(false);
    setEnemyToDefault();
  }

  
  return (
    <>
      {result === "winner" ? (
        <div className="response">
          <audio autoPlay src="https://dl.vgmdownloads.com/soundtracks/pokemon-red-green-blue-yellow/ecwbedzmys/12%20Victory%21%20%28Trainer%20Battle%29.mp3"></audio>
          <h1>EASY PEASY LEMON SQUEEZI!!</h1>
          <button onClick={() => handleAgain()}>GO AGAIN CHAMP!</button>
        </div>
      ) : result === "lost" ? (
        <div className="response">
          <audio autoPlay src="https://dl.vgmdownloads.com/soundtracks/pokemon-red-green-blue-yellow/bhrjdugjcz/20%20Fanfare%20Pok%C3%A9mon%20Caught.mp3"></audio>
          <h1>OMG WHAT A LOOSER! DID U KNOW WHAT GAME ARE U PLAYING???</h1>
          <button onClick={() => handleAgain()}>Play again? (noob)</button>
        </div>
      ) : friendly && enemy && friendlyHp && enemyHp && (
        <div className="battlearena">
          <audio autoPlay src="https://dl.vgmdownloads.com/soundtracks/pokemon-red-green-blue-yellow/lfakpvxalk/10%20Battle%21%20%28Trainer%20Battle%29.mp3"></audio>
          <div className="enemy">
            <progress className="hpbar" value={enemyHp} max={maxEnemyHp}>{enemyHp}</progress>
            <h2 className="hp">HP</h2>
            <img src={`${enemy.sprites["front_default"]}`} className="enemy-image" />
          </div>
          <button className="fightbutton" onClick={() => handleBattle(friendlyHp, enemyHp, friendly, enemy)}>FIGHT!</button>
          <div className="friendly">
            <img src={`${friendly.sprites["back_default"]}`} className="friendly-image" />
            <h2 className="hp">HP</h2>
            <progress className="hpbar" value={friendlyHp} max={maxFriendlyHp}></progress>
          </div>
        </div>
      )}
    </>
  )
}

export default Battle