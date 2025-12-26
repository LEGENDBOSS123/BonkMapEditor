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
        json.angle = this.angle;
        json.scale = this.scale;
        json.vertices = this.vertices.map(v => ([v.x, v.y]));
        return json;
    }

    static fromJSON(json) {
        const polygon = new Polygon();
        polygon.fromJSON(json);
        polygon.angle = json.angle;
        polygon.scale = json.scale;
        polygon.vertices = (json.vertices || []).map(v => ({ x: v[0], y: v[1] }));
        return polygon;
    }
}