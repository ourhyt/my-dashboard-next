export interface Pokemon {
    abilities:                Ability[];
    base_experience:          number;
    cries:                    Cries;
    forms:                    Species[];
    game_indices:             GameIndex[];
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    past_abilities:           any[];
    past_types:               any[];
    species:                  Species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

export interface Ability {
    ability:   null[];
    is_hidden: boolean;
    slot:      number;
}

export interface Cries {
    latest: string;
    legacy: string;
}

export interface Species {
    name: string;
    url:  string;
}

export interface GameIndex {
    game_index: number;
    version:    null[];
}

export interface Move {
    move:MoveDetail;
    version_group_details: null[];
}

interface  MoveDetail {
    name: string;
}

export interface Sprites {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other:              Other;
    versions:           Versions;
}

export interface Other {
    dream_world:        DreamWorld;
    home:               null[];
    "official-artwork": null[];
    showdown:           null[];
}

interface  DreamWorld {
    front_default: string;
}

export interface Versions {
    "generation-i":    null[];
    "generation-ii":   null[];
    "generation-iii":  null[];
    "generation-iv":   null[];
    "generation-v":    null[];
    "generation-vi":   null[];
    "generation-vii":  null[];
    "generation-viii": null[];
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      null[];
}

export interface Type {
    slot: number;
    type: TypeDetail;
}

interface TypeDetail {
    name: string;
}
