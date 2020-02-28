import * as uuid from 'uuid';

export class Control {
    id: string;
    name: string;
    type: string;
    title: string;
    label: string;
    class: string;
    disabled: boolean;
    constructor(options: {
        id: string;
        name: string;
        type: string;
        title: string;
        label: string;
        class: string;
        disabled: boolean;
    }) {
        this.id = uuid.v4();
        this.name = options.name;
        this.type = options.type;
        this.title = options.title;
        this.label = options.label;
        this.class = options.class;
        this.disabled = options.disabled;
    }
}