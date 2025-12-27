export class Settings {
    constructor() {
        this.respawn = false;
        this.noCollision = false;
        this.complexPhysics = false;
        this.gridSize = 25;
        this.fly = false;
    }

    toJSON() {
        return {
            re: this.respawn,
            nc: this.noCollision,
            pq: this.complexPhysics ? 2 : 1,
            gd: this.gridSize,
            fl: this.fly
        }
    }

    static fromJSON(json) {
        const settings = new Settings();
        settings.respawn = json.re ?? false;
        settings.noCollision = json.nc ?? false;
        settings.complexPhysics = (json.pq ?? 1) === 2;
        settings.gridSize = json.gd ?? 25;
        settings.fly = json.fl ?? false;
        return settings;
    }

    fromDataView(view, offset, version) {
        this.respawn = view.getUint8(offset) !== 0;
        offset += 1;
        this.noCollision = view.getUint8(offset) !== 0;
        offset += 1;

        if (version >= 3) {
            this.complexPhysics = view.getUint16(offset) === 2;
            offset += 2;
        }

        if(version >= 4 && version <= 12){
            this.gridSize = view.getUint16(offset);
            offset += 2;
        }
        if (version >= 13) {
            this.gridSize = view.getFloat32(offset);
            offset += 4;
        }
        if (version >= 9) {
            this.fly = view.getUint8(offset) !== 0;
            offset += 1;
        }
        return offset;
    }
}