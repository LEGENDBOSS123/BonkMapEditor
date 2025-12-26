import { Shape } from "./Shape.mjs";

export class Polygon extends Shape {
    constructor() {
        super();
        this.type = Shape.TYPE.POLYGON;
        this.angle = 0;
        this.scale = 1;
        this.vertices = [];
    }

    addVertex(x, y) {
        this.vertices.push({ x, y });
    }

    toJSON() {
        const json = super.toJSON();
        json.a = this.angle;
        json.s = this.scale;
        json.v = this.vertices.map(v => ([v.x, v.y]));
        return json;
    }

    static fromJSON(json) {
        const polygon = new Polygon();
        polygon.fromJSON(json);
        polygon.angle = json.a;
        polygon.scale = json.s;
        polygon.vertices = (json.v || []).map(v => ({ x: v[0], y: v[1] }));
        return polygon;
    }
}