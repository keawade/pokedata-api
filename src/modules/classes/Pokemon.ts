import Type from './Type';

export default class Pokemon {
  id: number;
  name: string;
  types: Array<string>;
  typeData: Array<Type>;
  height: number;
  weight: number;
  sprites: IPokemonSprites;

  constructor(givenData: IPokemon = {} as IPokemon) {
    if (givenData.id != undefined) {
      this.id = givenData.id;
      this.name = givenData.name;
      this.height = givenData.height;
      this.weight = givenData.weight;
      this.sprites = givenData.sprites;
      this.types = givenData.types.map((type) => (type.type.name))
      this.typeData = undefined;
    }
  }

  public setTypeData = (types: Array<IType>) => {
    this.typeData = types.map((type) => (new Type(type)));
  }
}
