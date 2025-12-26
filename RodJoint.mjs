export class RodJoint {
    static TYPE = "d";

    constructor() {
        this.anchorA = {
            x: 0,
            y: 0
        };
        this.anchorB = {
            x: 0,
            y: 0
        };
        this.bodyA_Id = -1;
        this.bodyB_Id = -1;
        
        this.damping = 0.1;
        this.softness = 0.1;

        this.breakForce = 0;
        this.collisionWithAttached = false;
        this.drawLine = true;
    }

    toJSON(){
        return {
            type: RodJoint.TYPE,
            aa: [this.anchorA.x, this.anchorA.y],
            ab: [this.anchorB.x, this.anchorB.y],
            ba: this.bodyA_Id,
            bb: this.bodyB_Id,
            d: {
                bf: this.breakForce,
                cc: this.collisionWithAttached,
                dl: this.drawLine,
                dr: this.damping,
                fh: this.softness
            }
        }
    }

    static fromJSON(json){
        const joint = new RodJoint();
        joint.anchorA = {
            x: json.aa[0],
            y: json.aa[1]
        };
        joint.anchorB = {
            x: json.ab[0],
            y: json.ab[1]
        };
        joint.bodyA_Id = json.ba;
        joint.bodyB_Id = json.bb;
        joint.breakForce = json.d.bf;
        joint.collisionWithAttached = json.d.cc;
        joint.drawLine = json.d.dl;
        joint.damping = json.d.dr;
        joint.softness = json.d.fh;
        return joint;
    }
}