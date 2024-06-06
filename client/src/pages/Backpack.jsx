import { useEffect, useState } from "react";
import DisplayPoke from "./components/DisplayBackpackPokemons";

const fetchPokemonData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    const data = await response.json();
    return data;
};

const usersPokemonUrls = [
    "https://pokeapi.co/api/v2/pokemon/gengar",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/blastoise",
    "https://pokeapi.co/api/v2/pokemon/cubone",
    "https://pokeapi.co/api/v2/pokemon/muk",
    "https://pokeapi.co/api/v2/pokemon/mankey"
];

function Backpack({ onChoose }) {
    const [isPending, setIsPending] = useState(true);
    const [userPokemons, setUserPokemons] = useState([]);

    useEffect(() => {
        const loadPokemons = async () => {
            try {
                const pokemons = await Promise.all(usersPokemonUrls.map(fetchPokemonData));
                setUserPokemons(pokemons);
            } catch (error) {
                console.error("Error fetching pokemons:", error);
            } finally {
                setIsPending(false);
            }
        };

        loadPokemons();
    }, []);

    return (
        <div className="backpack">
            {isPending && <p>Loading the pokemon...</p>}
            {userPokemons.length > 0 && <DisplayPoke onChoose={onChoose} pokemons={userPokemons} />}
        </div>
    );
}

export default Backpack;
