export class Shape {
    static TYPE = {
        BOX: "bx",
        CIRCLE: "ci",
        POLYGON: "po"
    }

    constructor() {
        this.type = null;
        this.position = {
            x: 0,
            y: 0
        };
        this.shrink = false;
    }

    toJSON() {
        return {
            type: this.type,
            c: [this.position.x, this.position.y],
            sk: this.shrink
        }
    }
    
    fromJSON(json){
        this.type = json.type;
        this.position = {
            x: json.c[0],
            y: json.c[1]
        };
        this.shrink = json.sk;
    }
}