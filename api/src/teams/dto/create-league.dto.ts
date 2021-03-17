import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLeagueDto {
  @IsString()
  @ApiProperty({ description: 'The league name.' })
  readonly name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The league description.' })
  readonly description: string;

  @IsString()
  @ApiProperty({ description: 'The league country.' })
  readonly country: string;

  @IsString()
  @ApiProperty({ description: 'The league sport.' })
  readonly sport: string;

}
