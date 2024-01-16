import { useEffect, useState } from "react";
import DisplayPoke from "./DisplayPoke";

const fetchFunc = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}


function Backpack({onChoose}) {
    const usersPokemonUrls = [
        "https://pokeapi.co/api/v2/pokemon/gengar",
        "https://pokeapi.co/api/v2/pokemon/charizard",
        "https://pokeapi.co/api/v2/pokemon/blastoise",
        "https://pokeapi.co/api/v2/pokemon/cubone",
        "https://pokeapi.co/api/v2/pokemon/muk",
        "https://pokeapi.co/api/v2/pokemon/mankey"
    ]
    const [isPending, setIsPending] = useState(true)
    const [userPokemons, setUserPokemons] = useState()


    useEffect(() => {

        const promiseFunction = async () => {
            const pokemonFetchers = usersPokemonUrls.map((userPokemonUrl) => {
                return fetchFunc(userPokemonUrl)
            })

            const pokemons = await Promise.all(pokemonFetchers)
            // console.log(pokemons)
            setUserPokemons(pokemons)
            setIsPending(false)
        }
        promiseFunction()
    }, [])

   


    return (
        <div className="backpack">
            {isPending && <p>{"Loading the pokemon"}</p>}
            {userPokemons && <DisplayPoke onChoose={onChoose} pokemons={userPokemons} />}
        </div>
    );
}

export default Backpack;