export class Spawns {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.priority = 5;
        this.redTeam = true;
        this.blueTeam = true;
        this.greenTeam = true;
        this.yellowTeam = true;
        this.freeForAll = true;
        this.name = "Spawn";
    }

    toJSON() {
        return {
            x: this.x,
            y: this.y,
            xv: this.xVelocity,
            yv: this.yVelocity,
            priority: this.priority,
            r: this.redTeam,
            b: this.blueTeam,
            gr: this.greenTeam,
            ye: this.yellowTeam,
            f: this.freeForAll,
            n: this.name
        }
    }

    static fromJSON(json) {
        const spawn = new Spawns();
        spawn.x = json.x;
        spawn.y = json.y;
        spawn.xVelocity = json.xv;
        spawn.yVelocity = json.yv;
        spawn.priority = json.priority;
        spawn.redTeam = json.r;
        spawn.blueTeam = json.b;
        spawn.greenTeam = json.gr;
        spawn.yellowTeam = json.ye;
        spawn.freeForAll = json.f;
        spawn.name = json.n;
        return spawn;
    }
}