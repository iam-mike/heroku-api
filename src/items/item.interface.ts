import { IsNumber } from 'class-validator';

export class Item {
  readonly name: string;
  @IsNumber() readonly price: number;
}
