import UseFetch from "./UseFetch";
import { useEffect, useState } from "react";
import DisplayPoke from "./DisplayPoke";

function Backpack() {
   const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/gengar",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/blastoise",
    "https://pokeapi.co/api/v2/pokemon/cubone",
    "https://pokeapi.co/api/v2/pokemon/muk",
    "https://pokeapi.co/api/v2/pokemon/mankey"
]
const [isPending, setIsPending]= useState(true)
const [error, setError] = useState(null)
const [pokeInfos, setPokeInfos] = useState()


// useEffect(()=>{
//         const pokeInfo = [];
//         usersPokemon.map((pokeURL)=>{
//             const {data, isPending, error} = UseFetch(pokeURL)
//                 {error && setError(error)}
//                 { isPending && setIsPending(isPending)}
//                 if(data){
//                     pokeInfo.push(data);
//                 }
//             })
//         setPokeInfos(pokeInfo)
//     }, [])
        
        
        return (
        <div>
        {error && <div> { error } </div>}
        { isPending && <p>{"Loading the pokemon"}</p> }
        {pokeInfos && pokeInfos.map((poke, index) => {
            <DisplayPoke key={index} pokemon={poke}/>
        })}
        </div>
    );
}

export default Backpack;