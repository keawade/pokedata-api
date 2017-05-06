import { Controller, Get, Post, Response, Param, HttpStatus } from 'nest.js';
import { PokemonService } from '../pokemon/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) { }

  @Get()
  public async getPokemonList( @Response() res) {
    try {
      const pokemonList = await this.pokemonService.getPokemonList();
      res.status(HttpStatus.OK).json(pokemonList);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal error' });
    }
  }

  @Get('/:id')
  public async getPokemon( @Response() res, @Param('id') id) {
    try {
      const pokemon = await this.pokemonService.getPokemon(id);
      res.status(HttpStatus.OK).json(pokemon);
    } catch (err) {
      res.status(HttpStatus.NOT_FOUND).json({ error: 'Resource not found' });
    }
  }
}
