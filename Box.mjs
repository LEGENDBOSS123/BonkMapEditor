import { Shape } from "./Shape.mjs";

export class Box extends Shape {
    constructor() {
        super();
        this.type = Shape.TYPE.BOX;
        this.width = 100;
        this.height = 100;
        this.angle = 0;
    }

    toJSON() {
        const json = super.toJSON();
        json.w = this.width;
        json.h = this.height;
        json.a = this.angle;
        return json;
    }

    static fromJSON(json) {
        const box = new Box();
        box.fromJSON(json);
        box.width = json.w;
        box.height = json.h;
        box.angle = json.a;
        return box;
    }
}