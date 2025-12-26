import { Settings } from "./Settings.mjs";

export class Map {

    static offScreenCanvas = new OffscreenCanvas(1, 1);

    constructor() {
        this.version = 15;
        this.settings = new Settings();
        this.physics = null;
        this.spawns = [];
        this.capZones = [];
        this.mapInfo = [];
    }

    async exportCanvas(size = 1024) {
        const off = new OffscreenCanvas(size, size);
        const offCtx = off.getContext('2d');
        await this.draw(offCtx, size / 2, 0, 0, 1);
        return off;
    }

    async exportBlob(size = 1024) {
        const canvas = await this.exportCanvas(size);
        return await canvas.convertToBlob({ type: 'image/png' });
    }

    async download(size = 1024, filename = 'map.png') {
        const blob = await this.exportBlob(size);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    async draw(ctx, radius = 100, offsetX = 0, offsetY = 0, scale = 1) {
        const off = Skin.offScreenCanvas;
        off.width = ctx.canvas.width;
        off.height = ctx.canvas.height;
        const offCtx = off.getContext('2d');
        const cx = ctx.canvas.width / 2;
        const cy = ctx.canvas.height / 2;
    }

    toHexString(color) {
        return `#${color.toString(16).padStart(6, '0')}`;
    }

    toJSON() {
        return {
            v: this.version,
            s: this.settings.toJSON(),
            physics: this.physics.toJSON(),
            spawns: this.spawns.map(s => s.toJSON()),
            capZones: this.capZones.map(cz => cz.toJSON()),
            mapInfo: this.mapInfo.toJSON()
        }
    }

    static fromJSON(json) {
        const map = new Map();
        map.version = json.v ?? 1;
        map.settings = Settings.fromJSON(json.s ?? {});
        map.physics = Physics.fromJSON(json.physics ?? {});
        map.spawns = (json.spawns ?? []).map(s => Spawn.fromJSON(s));
        map.capZones = (json.capZones ?? []).map(cz => CapZone.fromJSON(cz));
        map.mapInfo = MapInfo.fromJSON(json.mapInfo ?? {});
        return map;
    }
}