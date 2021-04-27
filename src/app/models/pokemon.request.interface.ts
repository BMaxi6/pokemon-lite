export interface abilitiesI{
    name: string;
    description: string;
}

export interface pokemonI{
    id: number;
    name: string;
    evolutionId: number;
    abilities: abilitiesI[];
    lvl: number;
}

export interface evolutionI{
    id: number;
    lvl: number;
    name: string;
}