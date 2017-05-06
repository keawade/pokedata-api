import { Component, HttpException } from 'nest.js';

@Component()
export class PokemonService {
  private pokemon = [
    { id: 1, name: 'bulbasaur' },
    { id: 2, name: 'ivysaur' },
    { id: 3, name: 'venusaur' },
  ];

  getAllPokemon() {
    return Promise.resolve(this.pokemon);
  }

  getPokemon(id: number) {
    const pokemon = this.pokemon.find((pokemon) => (pokemon.id === id));
    if (!pokemon) {
      throw new HttpException('Pokemon not found', 404);
    }
    return Promise.resolve(pokemon);
  }
}
