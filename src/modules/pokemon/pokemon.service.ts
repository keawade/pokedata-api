import * as Pokedex from 'pokedex-promise-v2';
import Pokemon from '../classes/Pokemon';
import Type from '../classes/Type';
import { Component, HttpException } from 'nest.js';

@Component()
export class PokemonService {
  private pokedex = new Pokedex();

  public async getPokemonList() {
    try {
      const namedResourceList: IResultList = await this.pokedex.getPokemonsList()
      const nameList: string[] = namedResourceList.results.map((result) => (result.name));
      return Promise.resolve(nameList);
    } catch (err) {
      console.error(err);
      throw new HttpException('Internal error', 500);
    }
  }

  public async getPokemon(name: string) {
    const pokemon = new Pokemon(await this.pokedex.getPokemonByName(name));
    const types = await Promise.all(pokemon.types.map((type) => (this.pokedex.getTypeByName(type))));
    if (!pokemon || !types) {
      throw new HttpException('Pokemon not found', 404);
    }
    pokemon.setTypeData(types);
    return Promise.resolve(pokemon);
  }
}
