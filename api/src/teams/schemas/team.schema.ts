import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

import { Player, PlayerSchema } from '../../players/schemas/player.schema';
import { League } from '../../types';

@Schema()
export class Team extends Document {
  @Prop({ required: true })
  @ApiProperty({ description: 'The team name.' })
  name: string;

  @Prop()
  @ApiProperty({ description: 'The team logo.' })
  logo: string;


  @Prop({type: League})
  @ApiProperty({ description: 'The league of the team.' })
  league: League;


  @Prop({ type: [PlayerSchema] })
  @ApiProperty({ description: 'The team players.' })
  players: Player[]
}

export const TeamSchema = SchemaFactory.createForClass(Team);

