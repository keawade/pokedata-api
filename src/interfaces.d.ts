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
  type: {
    name: string;
    url: string;
  }
}

interface IType {
  id: number;
  name: string;
  damage_relations: {
    no_damage_to: [{
      name: string;
    }];
    half_damage_to: [{
      name: string;
    }];
    double_damage_to: [{
      name: string;
    }];
    no_damage_from: [{
      name: string;
    }];
    half_damage_from: [{
      name: string;
    }];
    double_damage_from: [{
      name: string;
    }];
  }
  generation: {
    name: string;
  }
  move_damage_class: {
    name: string;
  }
}