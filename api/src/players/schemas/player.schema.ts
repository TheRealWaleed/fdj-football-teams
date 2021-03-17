import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Price } from '../../types';

@Schema()
export class Player extends Document {
  @Prop({ required: true })
  @ApiProperty({ description: 'The first name of the player.' })
  firstName: string;

  @Prop({ required: true })
  @ApiProperty({ description: 'The last name of the player.' })
  lastName: string;

  @Prop()
  @ApiProperty({ description: 'The contract type of the player.' })
  contract: string;

  @Prop({type: Price})
  @ApiProperty({ description: 'The price of the player.' })
  price: Price;

  @Prop()
  @ApiProperty({ description: 'The role of the player.' })
  role: string;

  @Prop()
  @ApiProperty({ description: 'The birth date of the player.' })
  birthdate: Date;

  @Prop()
  @ApiProperty({ description: 'The image thumbnail  of the player.' })
  thumbnail: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
