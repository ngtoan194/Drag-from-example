import * as layoutuId from 'uuid';
import { Col } from './col.model';

export class Item {
    layoutId: string;
    layoutType: string;
    cols: Col[];

    constructor(options: {
        layoutType: string;
        cols?: Col[];
    }) {
        this.layoutId = layoutuId.v4();
        this.layoutType = options.layoutType;
        this.cols = options.cols || [];
    }
}