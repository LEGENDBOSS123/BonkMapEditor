export class Physics {
    constructor() {
        this.shapes = [];
        this.fixtures = [];
        this.bodies = [];
        this.bodyRenderOrder = [];
        this.joints = [];
        this.partsPerMeter = 15;
    }

    updateBodyRenderOrder(){
        this.bodyRenderOrder = this.bodies.map(b => b.id);
    }

    toJSON() {
        return {
            shapes: this.shapes.map(s => s.toJSON()),
            fixtures: this.fixtures.map(f => f.toJSON()),
            bodies: this.bodies.map(b => b.toJSON()),
            bro: [...this.bodyRenderOrder],
            joints: this.joints.map(j => j.toJSON()),
            ppm: this.partsPerMeter
        }
    }

    static fromJSON(json) {
        const physics = new Physics();
        physics.shapes = json.shapes.map(s => Shape.fromJSON(s));
        physics.fixtures = json.fixtures.map(f => Fixture.fromJSON(f));
        physics.bodies = json.bodies.map(b => Body.fromJSON(b));
        physics.bodyRenderOrder = [...(json.bro || [])];
        physics.joints = (json.joints || []).map(j => Joint.fromJSON(j));
        physics.partsPerMeter = json.ppm || 15;
        return physics;
    }
}