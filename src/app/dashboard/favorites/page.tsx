import type {Metadata} from "next";
import {FavoritePokemonCard} from "@/components";
import {IoHeartOutline} from "react-icons/io5";

export const metadata: Metadata = {
    title: "Favoritos",
    description: "Generated Pokemons",
};

export default async function PokemonsPage(){
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemones Favoritos<small className="text-blue-500">Global State</small></span>
            <FavoritePokemonCard/>
        </div>
    )
}
