export class RotationJoint {

    static TYPE = "rv";

    constructor() {
        this.anchor = {
            x: 0,
            y: 0
        };
        this.bodyA_Id = -1;
        this.bodyB_Id = -1;
        this.motorEnabled = false;
        this.maxSpeed = 0;
        this.turnForce = 0;
        this.angleLimitsEnabled = false;
        this.lowerAngle = 0;
        this.upperAngle = 0;
        this.breakForce = 0;
        this.collisionWithAttached = false;
        this.drawLine = true;
    }

    toJSON() {
        return {
            type: RotationJoint.TYPE,
            aa: [this.anchor.x, this.anchor.y],
            ba: this.bodyA_Id,
            bb: this.bodyB_Id,
            d: {
                bf: this.breakForce,
                cc: this.collisionWithAttached,
                dl: this.drawLine,
                el: this.angleLimitsEnabled,
                em: this.motorEnabled,
                la: this.lowerAngle,
                ua: this.upperAngle,
                ms: this.maxSpeed,
                mmt: this.turnForce
            }
        }
    }

    static fromJSON(json) {
        const joint = new RotationJoint();
        joint.anchor = {
            x: json.aa[0],
            y: json.aa[1]
        };
        joint.bodyA_Id = json.ba;
        joint.bodyB_Id = json.bb;
        joint.breakForce = json.d.bf;
        joint.collisionWithAttached = json.d.cc;
        joint.drawLine = json.d.dl;
        joint.angleLimitsEnabled = json.d.el;
        joint.motorEnabled = json.d.em;
        joint.lowerAngle = json.d.la;
        joint.upperAngle = json.d.ua;
        joint.maxSpeed = json.d.ms;
        joint.turnForce = json.d.mmt;
        return joint;
    }
}