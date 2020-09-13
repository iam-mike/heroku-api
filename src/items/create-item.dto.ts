import { IsString, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsString() readonly name: string;

  @IsNumber() readonly price: number;
}
