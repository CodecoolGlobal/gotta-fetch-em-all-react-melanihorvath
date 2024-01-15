function DisplayPoke(props) {
   const pokemon = props.pokemon

   function getStat(poke, type){
    const Stat = poke.stats.find(stat => stat.stat.name === `${type}`);

    if (Stat){
      return Stat.base_stat;
    }
  }
  console.log(pokemon)

    return (
        <div key={props.key} className="poke">
            <img src={pokemon.sprites.front_default}></img>
            <h3>{pokemon.forms.name}</h3>
            <p>{"Type: " + pokemon.types.type.name}</p>
            <p>{"HP: " + getStat(pokemon, "hp")}</p>
            <p>{"Attack: " + getStat(pokemon, "attack")}</p>
            <p>{"Defense: " + getStat(pokemon, "defense")}</p>
        </div>
    );
}

export default DisplayPoke;