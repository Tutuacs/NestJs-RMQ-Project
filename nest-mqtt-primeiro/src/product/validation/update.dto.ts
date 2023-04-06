import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNumber()
  @IsOptional()
  id: number;
}
