import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Price {
  @Prop()
  @ApiProperty({ description: 'The contract price.' })
  currency: string;

  @Prop()
  @ApiProperty({ description: 'The contract currency.' })
  amount: number;
}
