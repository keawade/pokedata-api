import { Module } from 'nest.js';
import { PokemonController } from './controllers/pokemon.controller';
import { PokemonService } from './services/pokemon.service';

@Module({
    controllers: [ PokemonController ],
    components: [ PokemonService ],
})
export class ApplicationModule {}