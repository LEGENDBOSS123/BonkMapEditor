export class SpringJoint {
    static TYPE = "lsj";

    constructor() {
        this.bodyA_Id = -1;
        this.springForce = 500000;
        this.springLength = 50;
        this.breakForce = 0;
        this.collisionWithAttached = false;
        this.drawLine = true;
    }

    toJSON() {
        return {
            type: SpringJoint.TYPE,
            ba: this.bodyA_Id,
            d: {
                bf: this.breakForce,
                cc: this.collisionWithAttached,
                dl: this.drawLine
            },
            sax: 0,
            say: 0,
            sf: this.springForce,
            sl: this.springLength
        }
    }

    static fromJSON(json) {
        const joint = new SpringJoint();
        joint.bodyA_Id = json.ba;
        joint.springForce = json.sf;
        joint.springLength = json.sl;
        joint.breakForce = json.d.bf;
        joint.collisionWithAttached = json.d.cc;
        joint.drawLine = json.d.dl;
        return joint;
    }
}