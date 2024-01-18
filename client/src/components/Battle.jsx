import { useEffect, useState } from "react";

function Battle(props) {
  const pokeIsSelected = props.onPokeIsSelected;
  const landIsSelected = props.onLandIsSelected;
  const playerPokemon = props.onChoosenPokemon;
  const enemyPokemon = props.onEnemy;
  const readyToPlay = props.readyToPlay;
  const setEnemyToDefault = props.setEnemy;
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
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + playerPokemon.name)
      .then(res => res.json())
      .then(data => {
        setFriendly(data)
        setFriendlyHp(getStat(data, "hp"))
        setMaxFriendlyHp(getStat(data, "hp"))
      })
  }, []);

  function handleBattle(friendlyHp, enemyHp, friendly, enemy) {
    if (enemy && friendly) {
      const eAttack = getStat(enemy, "attack");
      const eDef = getStat(enemy, "defense");
      const fAttack = getStat(friendly, "attack")
      const fDef = getStat(friendly, "defense");
      if (friendlyHp > 0 && enemyHp > 0) {
        const fDamage = Math.floor(((((2 / 5 + 2) * fAttack * 60 / eDef) / 50) + 2) * randomNumber() / 255)
        setEnemyHp(enemyHp - fDamage)

        const friendlyImage = document.querySelector('.friendly-image');
      friendlyImage.classList.add('moved');
      setTimeout(() => {
        friendlyImage.classList.remove('moved');
      }, 500);

        if (enemyHp - fDamage > 0) {
          const eDamage = Math.floor(((((2 / 5 + 2) * eAttack * 60 / fDef) / 50) + 2) * randomNumber() / 255)
          setFriendlyHp(friendlyHp - eDamage)

          const enemyImage = document.querySelector('.enemy-image');
      enemyImage.classList.add('moved');
      setTimeout(() => {
        enemyImage.classList.remove('moved');
      }, 500);

          if (friendlyHp - eDamage < 1) {
            setResult("lost");
          }
        } else {
          setResult("winner");
        }
      }
    }
  }

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
        <div>
          <audio autoPlay src="https://dl.vgmdownloads.com/soundtracks/pokemon-red-green-blue-yellow/ecwbedzmys/12%20Victory%21%20%28Trainer%20Battle%29.mp3"></audio>
          <h1>EASY PEASY LEMON SQUEEZI!!</h1>
          <button onClick={() => handleAgain()}>GO AGAIN CHAMP!</button>
        </div>
      ) : result === "lost" ? (
        <div>
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