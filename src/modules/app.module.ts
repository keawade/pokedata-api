import { Module } from 'nest.js';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
    modules: [PokemonModule],
})
export class ApplicationModule { }
