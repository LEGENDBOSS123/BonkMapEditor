export class Settings {
    constructor() {
        this.respawn = false;
        this.noCollision = false;
        this.complexPhysics = false;
        this.gridSize = 25;
        this.fly = false;
    }

    toJSON(){
        return {
            re: this.respawn,
            nc: this.noCollision,
            pq: this.complexPhysics ? 2 : 1,
            gd: this.gridSize,
            fl: this.fly
        }
    }

    static fromJSON(json){
        const settings = new Settings();
        settings.respawn = json.re ?? false;
        settings.noCollision = json.nc ?? false;
        settings.complexPhysics = (json.pq ?? 1) === 2;
        settings.gridSize = json.gd ?? 25;
        settings.fly = json.fl ?? false;
        return settings;
    }
}