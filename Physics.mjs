import { Box } from "./Box.mjs";
import { Circle } from "./Circle.mjs";
import { Polygon } from "./Polygon.mjs";
import { Shape } from "./Shape.mjs";
import { Fixture } from "./Fixture.mjs";
import { Body } from "./Body.mjs";
import { RotationJoint } from "./RotationJoint.mjs";
import { RodJoint } from "./RodJoint.mjs";
import { FollowsPathJoint } from "./FollowsPathJoint.mjs";
import { SpringJoint } from "./SpringJoint.mjs";

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
        physics.shapes = json.shapes.map(s => {
            switch (s.type) {
                case Shape.TYPE.BOX:
                    return Box.fromJSON(s);
                case Shape.TYPE.CIRCLE:
                    return Circle.fromJSON(s);
                case Shape.TYPE.POLYGON:
                    return Polygon.fromJSON(s);
            }
        });
        physics.fixtures = json.fixtures.map(f => Fixture.fromJSON(f));
        physics.bodies = json.bodies.map(b => Body.fromJSON(b));
        physics.bodyRenderOrder = [...json.bro];
        physics.joints = json.joints.map(j => {
            switch (j.type) {
                case RotationJoint.TYPE:
                    return RotationJoint.fromJSON(j);
                case RodJoint.TYPE:
                    return RodJoint.fromJSON(j);
                case FollowsPathJoint.TYPE:
                    return FollowsPathJoint.fromJSON(j);
                case SpringJoint.TYPE:
                    return SpringJoint.fromJSON(j);
            }
        });
        physics.partsPerMeter = json.ppm;
        return physics;
    }
}