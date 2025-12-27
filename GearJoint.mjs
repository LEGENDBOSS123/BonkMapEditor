export class GearJoint {
    static TYPE = "g";

    constructor() {
        this.bodyA_Id = -1;
        this.bodyB_Id = -1;
        this.ratio = 1;
        this.name = "Gear Joint";
    }

    toJSON(){
        return {
            ja: this.bodyA_Id,
            jb: this.bodyB_Id,
            r: this.ratio,
            n: this.name,
            type: GearJoint.TYPE
        };
    }

    static fromJSON(json){
        const joint = new GearJoint();
        joint.bodyA_Id = json.ja;
        joint.bodyB_Id = json.jb;
        joint.ratio = json.r;
        joint.name = json.n;
        return joint;
    }
}