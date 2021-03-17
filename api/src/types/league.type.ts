import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class League {
  @Prop()
  @ApiProperty({ description: 'The league name.' })
  name: string;

  @Prop()
  @ApiProperty({ description: 'The league description.' })
  description: string;

  @Prop()
  @ApiProperty({ description: 'The league country.' })
  country: string;

  @Prop()
  @ApiProperty({ description: 'The league sport.' })
  sport: string;
}
