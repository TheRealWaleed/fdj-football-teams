import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateTeamDto, UpdateTeamDto } from './dto';
import { Team } from './schemas/team.schema';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';


@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<Team>,
  ) {}

  create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = new this.teamModel(createTeamDto);

    return team.save();
  }

  findAll(paginationQuery: PaginationQueryDto): Promise<Team[]> {
    const { limit, offset, query } = paginationQuery;

    if (query) {
      return this.filter(query)
    }

    return this.teamModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec()
      ;
  }

  async filter(search): Promise<Team[]> {
    const teams = await this.teamModel.find({ 'league.name': new RegExp(search.query, 'i') }).exec();

    if (!teams.length) {
      throw new HttpException(`no teams for  ${search.query}.`, HttpStatus.NO_CONTENT);
    }

    return teams;
  }

  async findOne(id: string): Promise<Team> {
    const team = await this.teamModel.findOne({ _id: id }).exec();

    if (!team) {
      throw new NotFoundException(`Team #${id} not found`);
    }

    return team;
  }


  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team>  {
    const existingTeam = await this.teamModel
      .findOneAndUpdate({ _id: id }, { $set: updateTeamDto }, { new: true })
      .exec()
    ;

    if (!existingTeam) {
      throw new NotFoundException(`Team #${id} not found`);
    }

    return existingTeam;
  }

  async remove(id: string) {
    const team = await this.findOne(id);

    return team.remove();
  }
}
