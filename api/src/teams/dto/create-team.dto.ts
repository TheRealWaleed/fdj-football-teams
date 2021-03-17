import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { CreatePlayerDto } from '../../players/dto';
import { CreateLeagueDto } from './index';

export class CreateTeamDto {
  @IsString()
  @ApiProperty({ description: 'The league name.' })
  readonly name: string;

  @IsString()
  @ApiProperty({ description: 'The league country.' })
  readonly logo: string;

  @ValidateNested()
  @ApiProperty({ description: 'The league of the team.' })
  readonly league: CreateLeagueDto;

  @ValidateNested()
  @IsArray()
  @ApiProperty({ description: 'The players of the team.' })
  readonly players: CreatePlayerDto[];
}
