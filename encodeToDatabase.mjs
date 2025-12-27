import { bytebuffer2 } from "./bytebuffer2.mjs";
import LZString from "./LZString.mjs";

export function encodeToDatabase(W2A) {
    var M3n = [arguments];
    M3n[1] = new bytebuffer2;
    M3n[9] = M3n[0][0].physics;
    M3n[0][0].v = 15;
    M3n[1].writeShort(M3n[0][0].v);
    M3n[1].writeBoolean(M3n[0][0].s.re);
    M3n[1].writeBoolean(M3n[0][0].s.nc);
    M3n[1].writeShort(M3n[0][0].s.pq);
    M3n[1].writeFloat(M3n[0][0].s.gd);
    M3n[1].writeBoolean(M3n[0][0].s.fl);
    M3n[1].writeUTF(M3n[0][0].m.rxn);
    M3n[1].writeUTF(M3n[0][0].m.rxa);
    M3n[1].writeUint(M3n[0][0].m.rxid);
    M3n[1].writeShort(M3n[0][0].m.rxdb);
    M3n[1].writeUTF(M3n[0][0].m.n);
    M3n[1].writeUTF(M3n[0][0].m.a);
    M3n[1].writeUint(M3n[0][0].m.vu);
    M3n[1].writeUint(M3n[0][0].m.vd);
    M3n[1].writeShort(M3n[0][0].m.cr.length);
    for (
        M3n[84] = 0;
        M3n[84] < M3n[0][0].m.cr.length;
        M3n[84]++
    ) {
        M3n[1].writeUTF(M3n[0][0].m.cr[M3n[84]]);
    }
    M3n[1].writeUTF(M3n[0][0].m.mo);
    M3n[1].writeInt(M3n[0][0].m.dbid);
    M3n[1].writeBoolean(M3n[0][0].m.pub);
    M3n[1].writeInt(M3n[0][0].m.dbv);
    M3n[1].writeShort(M3n[9].ppm);
    M3n[1].writeShort(M3n[9].bro.length);
    for (M3n[17] = 0; M3n[17] < M3n[9].bro.length; M3n[17]++) {
        M3n[1].writeShort(M3n[9].bro[M3n[17]]);
    }
    M3n[1].writeShort(M3n[9].shapes.length);
    for (M3n[80] = 0; M3n[80] < M3n[9].shapes.length; M3n[80]++) {
        M3n[2] = M3n[9].shapes[M3n[80]];
        if (M3n[2].type == "bx") {
            M3n[1].writeShort(1);
            M3n[1].writeDouble(M3n[2].w);
            M3n[1].writeDouble(M3n[2].h);
            M3n[1].writeDouble(M3n[2].c[0]);
            M3n[1].writeDouble(M3n[2].c[1]);
            M3n[1].writeDouble(M3n[2].a);
            M3n[1].writeBoolean(M3n[2].sk);
        }
        if (M3n[2].type == "ci") {
            M3n[1].writeShort(2);
            M3n[1].writeDouble(M3n[2].r);
            M3n[1].writeDouble(M3n[2].c[0]);
            M3n[1].writeDouble(M3n[2].c[1]);
            M3n[1].writeBoolean(M3n[2].sk);
        }
        if (M3n[2].type == "po") {
            M3n[1].writeShort(3);
            M3n[1].writeDouble(M3n[2].s);
            M3n[1].writeDouble(M3n[2].a);
            M3n[1].writeDouble(M3n[2].c[0]);
            M3n[1].writeDouble(M3n[2].c[1]);
            M3n[1].writeShort(M3n[2].v.length);
            for (M3n[61] = 0; M3n[61] < M3n[2].v.length; M3n[61]++) {
                M3n[1].writeDouble(M3n[2].v[M3n[61]][0]);
                M3n[1].writeDouble(M3n[2].v[M3n[61]][1]);
            }
        }
    }
    M3n[1].writeShort(M3n[9].fixtures.length);
    for (M3n[20] = 0; M3n[20] < M3n[9].fixtures.length; M3n[20]++) {
        M3n[7] = M3n[9].fixtures[M3n[20]];
        M3n[1].writeShort(M3n[7].sh);
        M3n[1].writeUTF(M3n[7].n);
        if (M3n[7].fr === null) {
            M3n[1].writeDouble(Number.MAX_VALUE);
        } else {
            M3n[1].writeDouble(M3n[7].fr);
        }
        if (M3n[7].fp === null) {
            M3n[1].writeShort(0);
        }
        if (M3n[7].fp === false) {
            M3n[1].writeShort(1);
        }
        if (M3n[7].fp === true) {
            M3n[1].writeShort(2);
        }
        if (M3n[7].re === null) {
            M3n[1].writeDouble(Number.MAX_VALUE);
        } else {
            M3n[1].writeDouble(M3n[7].re);
        }
        if (M3n[7].de === null) {
            M3n[1].writeDouble(Number.MAX_VALUE);
        } else {
            M3n[1].writeDouble(M3n[7].de);
        }
        M3n[1].writeUint(M3n[7].f);
        M3n[1].writeBoolean(M3n[7].d);
        M3n[1].writeBoolean(M3n[7].np);
        M3n[1].writeBoolean(M3n[7].ng);
        M3n[1].writeBoolean(M3n[7].ig);
    }
    M3n[1].writeShort(M3n[9].bodies.length);
    for (M3n[37] = 0; M3n[37] < M3n[9].bodies.length; M3n[37]++) {
        M3n[4] = M3n[9].bodies[M3n[37]];
        M3n[1].writeUTF(M3n[4].type);
        M3n[1].writeUTF(M3n[4].n);
        M3n[1].writeDouble(M3n[4].p[0]);
        M3n[1].writeDouble(M3n[4].p[1]);
        M3n[1].writeDouble(M3n[4].a);
        M3n[1].writeDouble(M3n[4].fric);
        M3n[1].writeBoolean(M3n[4].fricp);
        M3n[1].writeDouble(M3n[4].re);
        M3n[1].writeDouble(M3n[4].de);
        M3n[1].writeDouble(M3n[4].lv[0]);
        M3n[1].writeDouble(M3n[4].lv[1]);
        M3n[1].writeDouble(M3n[4].av);
        M3n[1].writeDouble(M3n[4].ld);
        M3n[1].writeDouble(M3n[4].ad);
        M3n[1].writeBoolean(M3n[4].fr);
        M3n[1].writeBoolean(M3n[4].bu);
        M3n[1].writeDouble(M3n[4].cf.x);
        M3n[1].writeDouble(M3n[4].cf.y);
        M3n[1].writeDouble(M3n[4].cf.ct);
        M3n[1].writeBoolean(M3n[4].cf.w);
        M3n[1].writeShort(M3n[4].f_c);
        M3n[1].writeBoolean(M3n[4].f_1);
        M3n[1].writeBoolean(M3n[4].f_2);
        M3n[1].writeBoolean(M3n[4].f_3);
        M3n[1].writeBoolean(M3n[4].f_4);
        M3n[1].writeBoolean(M3n[4].f_p);
        M3n[1].writeBoolean(M3n[4].fz.on);
        if (M3n[4].fz.on) {
            M3n[1].writeDouble(M3n[4].fz.x);
            M3n[1].writeDouble(M3n[4].fz.y);
            M3n[1].writeBoolean(M3n[4].fz.d);
            M3n[1].writeBoolean(M3n[4].fz.p);
            M3n[1].writeBoolean(M3n[4].fz.a);
            M3n[1].writeShort(M3n[4].fz.t);
            M3n[1].writeDouble(M3n[4].fz.cf);
        }
        M3n[1].writeShort(M3n[4].fx.length);
        for (M3n[28] = 0; M3n[28] < M3n[4].fx.length; M3n[28]++) {
            M3n[1].writeShort(M3n[4].fx[M3n[28]]);
        }
    }
    M3n[1].writeShort(M3n[0][0].spawns.length);
    for (
        M3n[30] = 0;
        M3n[30] < M3n[0][0].spawns.length;
        M3n[30]++
    ) {
        M3n[6] = M3n[0][0].spawns[M3n[30]];
        M3n[1].writeDouble(M3n[6].x);
        M3n[1].writeDouble(M3n[6].y);
        M3n[1].writeDouble(M3n[6].xv);
        M3n[1].writeDouble(M3n[6].yv);
        M3n[1].writeShort(M3n[6].priority);
        M3n[1].writeBoolean(M3n[6].r);
        M3n[1].writeBoolean(M3n[6].f);
        M3n[1].writeBoolean(M3n[6].b);
        M3n[1].writeBoolean(M3n[6].gr);
        M3n[1].writeBoolean(M3n[6].ye);
        M3n[1].writeUTF(M3n[6].n);
    }
    M3n[1].writeShort(M3n[0][0].capZones.length);
    for (
        M3n[74] = 0;
        M3n[74] < M3n[0][0].capZones.length;
        M3n[74]++
    ) {
        M3n[3] = M3n[0][0].capZones[M3n[74]];
        M3n[1].writeUTF(M3n[3].n);
        M3n[1].writeDouble(M3n[3].l);
        M3n[1].writeShort(M3n[3].i);
        M3n[1].writeShort(M3n[3].ty);
    }
    M3n[1].writeShort(M3n[9].joints.length);
    for (M3n[89] = 0; M3n[89] < M3n[9].joints.length; M3n[89]++) {
        M3n[5] = M3n[9].joints[M3n[89]];
        if (M3n[5].type == "rv") {
            M3n[1].writeShort(1);
            M3n[1].writeDouble(M3n[5].d.la);
            M3n[1].writeDouble(M3n[5].d.ua);
            M3n[1].writeDouble(M3n[5].d.mmt);
            M3n[1].writeDouble(M3n[5].d.ms);
            M3n[1].writeBoolean(M3n[5].d.el);
            M3n[1].writeBoolean(M3n[5].d.em);
            M3n[1].writeDouble(M3n[5].aa[0]);
            M3n[1].writeDouble(M3n[5].aa[1]);
        }
        if (M3n[5].type == "d") {
            M3n[1].writeShort(2);
            M3n[1].writeDouble(M3n[5].d.fh);
            M3n[1].writeDouble(M3n[5].d.dr);
            M3n[1].writeDouble(M3n[5].aa[0]);
            M3n[1].writeDouble(M3n[5].aa[1]);
            M3n[1].writeDouble(M3n[5].ab[0]);
            M3n[1].writeDouble(M3n[5].ab[1]);
        }
        if (M3n[5].type == "lpj") {
            M3n[1].writeShort(3);
            M3n[1].writeDouble(M3n[5].pax);
            M3n[1].writeDouble(M3n[5].pay);
            M3n[1].writeDouble(M3n[5].pa);
            M3n[1].writeDouble(M3n[5].pf);
            M3n[1].writeDouble(M3n[5].pl);
            M3n[1].writeDouble(M3n[5].pu);
            M3n[1].writeDouble(M3n[5].plen);
            M3n[1].writeDouble(M3n[5].pms);
        }
        if (M3n[5].type == "lsj") {
            M3n[1].writeShort(4);
            M3n[1].writeDouble(M3n[5].sax);
            M3n[1].writeDouble(M3n[5].say);
            M3n[1].writeDouble(M3n[5].sf);
            M3n[1].writeDouble(M3n[5].slen);
        }
        if (M3n[5].type == "g") {
            M3n[1].writeShort(5);
            M3n[1].writeUTF(M3n[5].n);
            M3n[1].writeShort(M3n[5].ja);
            M3n[1].writeShort(M3n[5].jb);
            M3n[1].writeDouble(M3n[5].r);
        }
        if (M3n[5].type != "g") {
            M3n[1].writeShort(M3n[5].ba);
            M3n[1].writeShort(M3n[5].bb);
            M3n[1].writeBoolean(M3n[5].d.cc);
            M3n[1].writeDouble(M3n[5].d.bf);
            M3n[1].writeBoolean(M3n[5].d.dl);
        }
    }
    M3n[32] = M3n[1].toBase64();
    M3n[77] = LZString.compressToEncodedURIComponent(M3n[32]);
    return M3n[77];
};