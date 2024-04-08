import {PokemonGrid, PokemonsResponse, SimplePokemon} from "@/pokemons";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Pokemons 151",
    description: "Generated Pokemons",
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> =>{
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());
    return data.results.map(pokemon => ({
        name: pokemon.name,
        id: pokemon.url.split('/').at(-2)!,
    }));
}

export default async function PokemonsPage(){
    const pokemons = await getPokemons(151);
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokemons <small className="text-blue-500">estatico</small></span>
            <PokemonGrid pokemons={pokemons}/>
        </div>
    )
}