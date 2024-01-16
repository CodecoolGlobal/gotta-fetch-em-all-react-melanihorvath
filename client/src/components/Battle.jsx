import { useEffect, useState } from "react";

function Battle(props) {
  const pokeIsSelected = props.onPokeIsSelected;
  const landIsSelected = props.onLandIsSelected;
  const [enemy, setEnemy] = useState(null);
  const [friendly, setFriendly] = useState(null);
  const [result, setResult] = useState(null)
  const [friendlyHp, setFriendlyHp] = useState(null);
  const [enemyHp, setEnemyHp] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
      .then(res => res.json())
      .then(data => {
        setEnemy(data)
        setEnemyHp(getStat(data, "hp"))
      })
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
      .then(res => res.json())
      .then(data => {
        setFriendly(data)
        setFriendlyHp(getStat(data, "hp"))
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
        setEnemyHp(enemyHp-fDamage)
        if (enemyHp-fDamage > 1) {
          const eDamage = Math.floor(((((2 / 5 + 2) * eAttack * 60 / fDef) / 50) + 2) * randomNumber() / 255)
          setFriendlyHp(friendlyHp-eDamage)
          if (friendlyHp-eDamage < 1){
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

  function handleAgain(){
    pokeIsSelected(false);
    landIsSelected(false)
  }


  return (
    <>
      {result === "winner" ? (
        <div>
          <h1>EASY PEASY LEMON SQUEEZI!!</h1>
          <button onClick={()=>handleAgain()}>GO AGAIN CHAMP!</button>
        </div>
      ) : result === "lost" ? (
        <div>
          <h1>OMG WHAT A LOOSER! DID U KNOW WHAT GAME ARE U PLAYING???</h1>
          <button onClick={()=>handleAgain()}>Play again? (noob)</button>
        </div>
      ) : friendly && enemy && friendlyHp && enemyHp &&(
        <div>
        <div className="enemy">
          <img src={`${enemy.sprites["front_default"]}`} />
          <h2>{enemyHp}</h2>
        </div>
        <div className="friendly">
          <img src={`${friendly.sprites["back_default"]}`} />
          <h2>{friendlyHp}</h2>
        </div>
        <button onClick={() => handleBattle(friendlyHp, enemyHp, friendly, enemy)}>FIGHT!</button>
      </div>
      )}
    </>
  )
}

export default Battle