interface IPokemon {
  id: number;
  name: string;
  types: Array<IPokemonType>;
  height: number;
  weight: number;
  sprites: IPokemonSprites;
}

interface IPokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface IPokemonType {
  slot: number,
  type: INamedAPIResource
}

interface IType {
  id: number;
  name: string;
  damage_relations: {
    no_damage_to: Array<INamedAPIResource>;
    half_damage_to: Array<INamedAPIResource>;
    double_damage_to: Array<INamedAPIResource>;
    no_damage_from: Array<INamedAPIResource>;
    half_damage_from: Array<INamedAPIResource>;
    double_damage_from: Array<INamedAPIResource>;
  }
  generation: INamedAPIResource
  move_damage_class: INamedAPIResource;
}

interface IResultList {
  count: number;
  next: string;
  previous: string;
  results: Array<INamedAPIResource>;
}

interface INamedAPIResource {
  name: string;
  url: string;
}
