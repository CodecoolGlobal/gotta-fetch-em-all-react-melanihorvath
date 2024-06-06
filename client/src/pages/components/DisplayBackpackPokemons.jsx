function DisplayBackpackPokemons({ pokemons, onChoose : choosenPoke }) {

   const getStat = (poke, type) => {
    const stat = poke.stats.find(stat => stat.stat.name === type);
    return stat ? stat.base_stat : 'N/A';
  };

    return (
        <div className='backpackPokemons'>
            {pokemons.map((pokemon, index)=>(
                <div key={index} className="poke">
                    <img src={pokemon.sprites.front_default}></img>
                    <h3>{pokemon.name}</h3>
                    <p>{"Type: " + pokemon.types.map((type) => type.type.name)}</p>
                    <p>{"HP: " + getStat(pokemon, "hp")}</p>
                    <p>{"Attack: " + getStat(pokemon, "attack")}</p>
                    <p>{"Defense: " + getStat(pokemon, "defense")}</p>
                    <button className="backpackPokeButton" onClick={() => choosenPoke(pokemon)}>{`${pokemon.name}`}<br/>I choose you</button>
                </div>
            ))}
        </div>
  );
}

export default DisplayBackpackPokemons;