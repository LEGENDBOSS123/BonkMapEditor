export class MapInfo {

    static MODE = {
        CLASSIC: "d",
        ARROWS: "a",
        DEATH_ARROWS: "ard",
        GRAPPLE: "sp",
        VTOL: "v",
    }

    static DATABASE_VERSION = {
        BONK1: 1,
        BONK2: 2
    }

    constructor() {
        this.author = "";
        this.name = "";
        this.databaseVersion = MapInfo.DATABASE_VERSION.BONK2;
        this.databaseId = -1;
        this.authorId = -1;
        this.date = "";
        this.remixDatabaseVersion = MapInfo.DATABASE_VERSION.BONK1;
        this.remixId = 0;
        this.remixName = "";
        this.remixAuthor = "";
        this.creators = [];
        this.public = false;
        this.mode = MapInfo.MODE.CLASSIC;
        this.upvotes = 0;
        this.downvotes = 0;
    }

    toJSON() {
        return {
            a: this.author,
            n: this.name,
            dbv: this.databaseVersion,
            dbid: this.databaseId,
            authid: this.authorId,
            date: this.date,
            rxid: this.remixId,
            rxn: this.remixName,
            rxdb: this.remixDatabaseVersion,
            rxa: this.remixAuthor,
            cr: this.creators,
            pub: this.public,
            mo: this.mode,
            vu: this.upvotes,
            vd: this.downvotes
        }
    }

    static fromJSON(json) {
        const info = new MapInfo();
        info.author = json.a;
        info.name = json.n;
        info.databaseVersion = json.dbv;
        info.databaseId = json.dbid;
        info.authorId = json.authid;
        info.date = json.date;
        info.remixId = json.rxid;
        info.remixDatabaseVersion = json.rxdb;
        info.remixName = json.rxn;
        info.remixAuthor = json.rxa;
        info.creators = json.cr;
        info.public = json.pub;
        info.mode = json.mo;
        info.upvotes = json.vu;
        info.downvotes = json.vd;
        return info;
    }

}
