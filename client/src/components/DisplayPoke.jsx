function DisplayPoke(props) {
  const pokemons = props.pokemons

  function getStat(poke, type) {
    const Stat = poke.stats.find(stat => stat.stat.name === `${type}`);

    if (Stat) {
      return Stat.base_stat;
    }
  }


  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="poke">
          <img src={pokemon.sprites.front_default}></img>
          <h3>{pokemon.name}</h3>
          <p>{"Type: " + pokemon.types.map((type) => type.type.name)}</p>
          <p>{"HP: " + getStat(pokemon, "hp")}</p>
          <p>{"Attack: " + getStat(pokemon, "attack")}</p>
          <p>{"Defense: " + getStat(pokemon, "defense")}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayPoke;