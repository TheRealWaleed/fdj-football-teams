import { PartialType } from '@nestjs/swagger';
import { CreateLeagueDto } from './create-league.dto';

export class UpdateLeaguerDto extends PartialType(CreateLeagueDto) {}
