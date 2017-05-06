import { Controller, Get, Post, Response, Param, HttpStatus } from 'nest.js';
import { PokemonService } from '../services/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) { }

  @Get('/:id')
  public async getPokemon( @Response() res, @Param('id') id) {
    this.pokemonService.getPokemon(id)
      .then((pokemon) => (
        res.status(HttpStatus.OK).json(pokemon)
      ))
      .catch((error) => (
        res.status(HttpStatus.NOT_FOUND).json({ error: 'Resource not found' })
      ))
  }
}
