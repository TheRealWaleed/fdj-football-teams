import {
  Body, CacheInterceptor,
  Controller, Delete,
  Get,
  Param,
  Patch,
  Post,
  Query, UseInterceptors,
} from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { TeamsService } from './teams.service';
import { Team } from './schemas/team.schema';
import { CreateTeamDto, UpdateTeamDto } from './dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto, @Query() query: string) {
    if (query) {
      return this.teamsService.filter(query);
    }

    return this.teamsService.findAll(paginationQuery);
  }

  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Team> {
    return this.teamsService.findOne(id);
  }

  @ApiResponse({ status: 201, description: 'Creates new player object.' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Post()
  async create(@Body() createTeamDto: CreateTeamDto) {
    await this.teamsService.create(createTeamDto);
  }

  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto): Promise<Team> {
    return this.teamsService.update(id, updateTeamDto);
  }

  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Team> {
    return this.teamsService.remove(id);
  }
}
