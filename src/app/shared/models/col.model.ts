import * as coluId from 'uuid';
import { Control } from './control.model';

export class Col {
    colId: string;
    colType: string;
    control?: Control

    constructor(options: {
        name: string,
        colType: string,
        control?: Control
    }) {
        this.colId = coluId.v4();
        this.colType = options.colType;
        this.control = options.control || null;
    }
}