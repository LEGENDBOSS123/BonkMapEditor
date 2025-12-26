export class Circle extends Shape {
    constructor() {
        super();
        this.type = Shape.TYPE.CIRCLE;
        this.radius = 50;
    }

    toJSON() {
        const json = super.toJSON();
        json.r = this.radius;
        return json;
    }

    static fromJSON(json) {
        const circle = new Circle();
        circle.fromJSON(json);
        circle.radius = json.r;
        return circle;
    }
}