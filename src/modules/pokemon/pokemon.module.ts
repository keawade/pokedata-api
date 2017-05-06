import { Module } from 'nest.js';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  controllers: [PokemonController],
  components: [PokemonService],
})
export class PokemonModule { }
