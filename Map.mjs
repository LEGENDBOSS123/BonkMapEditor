import { encodeToDatabase } from "./encodeToDatabase.mjs";
import { CapZone } from "./CapZone.mjs";
import { decodeFromDatabase } from "./decodeFromDatabase.mjs";
import { MapInfo } from "./MapInfo.mjs";
import { Physics } from "./Physics.mjs";
import { Settings } from "./Settings.mjs";
import { Spawn } from "./Spawn.mjs";

export class Map {

    static offScreenCanvas = new OffscreenCanvas(1, 1);

    constructor() {
        this.version = 15;
        this.settings = new Settings();
        this.physics = new Physics();
        this.spawns = [];
        this.capZones = [];
        this.mapInfo = new MapInfo();
    }

    async exportCanvas(height = 500) {
        const off = new OffscreenCanvas(height * 730 / 500, height);
        const offCtx = off.getContext('2d');
        await this.draw(offCtx, height, 0, 0, 1);
        return off;
    }

    async exportBlob(height = 500) {
        const canvas = await this.exportCanvas(height);
        return await canvas.convertToBlob({ type: 'image/png' });
    }

    async download(height = 500, filename = 'map.png') {
        const blob = await this.exportBlob(height);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    async draw(ctx, height = 500, offsetX = 0, offsetY = 0, scale = 1) {
        const width = 730 / 500 * height;
        const cx = ctx.canvas.width / 2;
        const cy = ctx.canvas.height / 2;
        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.scale(scale, scale);
        ctx.beginPath();
        ctx.rect(cx - width / 2, cy - height / 2, width, height);
        ctx.clip();

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = this.constructor.toHexString('34495e');
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();

        ctx.translate(cx, cy);
        ctx.scale(height / 500, height / 500);

        this.physics.draw(ctx, this);
        for (const spawn of this.spawns) {
            spawn.draw(ctx, this);
        }

        ctx.restore();
    }

    static toHexString(color) {
        return `#${color.toString(16).padStart(6, '0')}`;
    }

    toJSON() {
        return {
            v: this.version,
            s: this.settings.toJSON(),
            physics: this.physics.toJSON(),
            spawns: this.spawns.map(s => s.toJSON()),
            capZones: this.capZones.map(cz => cz.toJSON()),
            m: this.mapInfo.toJSON()
        }
    }

    static fromJSON(json) {
        const map = new Map();
        map.version = json.v ?? 15;
        map.settings = Settings.fromJSON(json.s);
        map.physics = Physics.fromJSON(json.physics);
        map.spawns = (json.spawns ?? []).map(s => Spawn.fromJSON(s));
        map.capZones = (json.capZones ?? []).map(cz => CapZone.fromJSON(cz));
        map.mapInfo = MapInfo.fromJSON(json.m ?? {});
        return map;
    }

    static fromString(str) {
        return Map.fromJSON(decodeFromDatabase(str));
    }

    toString(){
        return encodeToDatabase(this.toJSON());
    }

}