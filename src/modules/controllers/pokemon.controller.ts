import { Controller, Get, Post, Response, Param, HttpStatus }  from 'nest.js';
import { PokemonService } from '../services/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  public async getAllPokemon(@Response() res) {
    this.pokemonService.getAllPokemon()
      .then((allPokemon) => (
        res.status(HttpStatus.OK).json(allPokemon)
      ));
  }

  @Get('/:id')
  public async getPokemon(@Response() res, @Param('id') id) {
    this.pokemonService.getPokemon(+id)
      .then((pokemon) => (
        res.status(HttpStatus.OK).json(pokemon)
      ));
  }
}
