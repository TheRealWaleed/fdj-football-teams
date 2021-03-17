import { IsDate, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePriceDto } from './create-price.dto';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The first name of the player.' })
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The last name of the player.' })
  readonly lastName: string;

  @IsDate()
  @ApiProperty({ description: 'The player birthdate.' })
  readonly birthdate: Date;

  @IsString()
  @ApiProperty({ description: 'The price of the player.' })
  readonly contract: string;

  @ValidateNested()
  @ApiProperty({ description: 'The price of the player.' })
  readonly price: CreatePriceDto;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The position of the player.' })
  readonly role: string;

  @IsString()
  @ApiProperty({ description: 'The photo of the player.' })
  readonly thumbnail: string;

}
