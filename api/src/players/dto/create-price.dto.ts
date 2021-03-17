import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePriceDto {
  @IsString()
  @ApiProperty({ description: 'The currency price.' })
  readonly currency: string;

  @IsNumber()
  @ApiProperty({ description: 'The price value.' })
  readonly amount: number;

}
