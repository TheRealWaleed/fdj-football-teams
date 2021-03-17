import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './schemas/player.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Player.name,
      schema: PlayerSchema,
    }])
  ],
})
export class PlayersModule {}
