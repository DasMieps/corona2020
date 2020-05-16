import {Item} from './item';
export {Item} from './item';
import {Comment} from './comment';
export {Comment} from './comment';

export class Shoppinglist {
    constructor (
        public id: number,
        public name: string,
        public due_date: Date,
        public creator_id: number,
        public shopper_id?: number,
        public actual_price?: number,
        public items?: Item[],
        public comments?: Comment[]
    ) {}
}
