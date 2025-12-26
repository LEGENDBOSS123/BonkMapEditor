export class FollowsPathJoint {
    static TYPE = "lpj";

    constructor() {
        this.bodyA_Id = -1;

        this.pathAngle = 0;
        this.pathLength = 200;
        this.moveSpeed = 0;
        this.moveForce = 0;

        this.breakForce = 0;
        this.collisionWithAttached = false;
        this.drawLine = true;
    }

    toJSON(){
        return {
            type: FollowsPathJoint.TYPE,
            ba: this.bodyA_Id,
            d: {
                bf: this.breakForce,
                cc: this.collisionWithAttached,
                dl: this.drawLine
            },
            pa: this.pathAngle,
            pax: 0,
            pay: 0,
            pf: this.moveForce,
            pl: 0,
            plen: this.pathLength,
            pms: this.moveSpeed,
            pu: 0
        }
    }

    static fromJSON(json){
        const joint = new FollowsPathJoint();
        joint.bodyA_Id = json.ba;
        joint.pathAngle = json.pa;
        joint.pathLength = json.plen;
        joint.moveSpeed = json.pms;
        joint.moveForce = json.pf;
        joint.breakForce = json.d.bf;
        joint.collisionWithAttached = json.d.cc;
        joint.drawLine = json.d.dl;
        return joint;
    }
}