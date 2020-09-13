import { Item } from './item.interface';
export declare class ItemsService {
    private readonly items;
    findAll(): Item[];
    create(item: Item): void;
}
