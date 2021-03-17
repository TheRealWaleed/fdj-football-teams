import {
  IsOptional,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @ApiProperty({ required: false, description: 'result limit.' })
  limit: number;

  @IsOptional()
  @IsPositive()
  @ApiProperty({ required: false, description: 'result offset.' })
  offset: number;

  @IsOptional()
  @ApiProperty({ required: false, description: 'query to filter by.' })
  query: string;
}
