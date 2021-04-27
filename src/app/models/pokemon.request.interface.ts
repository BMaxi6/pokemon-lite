export interface abilitiesI{
    name: string;
    description: string;
}

export interface pokemonI{
    id: number;
    name: string;
    evolutionId: number;
    abilities: abilitiesI[];
}

export interface pokemonsI{
    array: pokemonI[];
}