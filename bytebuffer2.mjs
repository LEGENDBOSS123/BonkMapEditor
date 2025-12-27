import pako from "./pako.mjs";

export class bytebuffer2 {
    constructor() {
        var g1d = [arguments];
        this.index = 0;
        this.buffer = new ArrayBuffer(100 * 1024);
        this.view = new DataView(this.buffer);
        this.implicitClassAliasArray = [];
        this.implicitStringArray = [];
        this.bodgeCaptureZoneDataIdentifierArray = [];
    }
    reset() {
        this.index = 0;
    }
    readInt29() {
        var p7k = [arguments];
        p7k[2] = 1;
        p7k[4] = this["readByte"]();
        p7k[1] = 0;
        p7k[6] = 0;
        p7k[8] = 0;
        if (p7k[4] & 0b10000000) {
            p7k[1] = this["readByte"]();
            p7k[2] = 2;
            if (p7k[1] & 0b10000000) {
                p7k[6] = this["readByte"]();
                p7k[2] = 3;
                if (p7k[6] & 0b10000000) {
                    p7k[8] = this["readByte"]();
                    p7k[2] = 4;
                }
            }
        }
        p7k[3] = 0;
        if (p7k[2] == 1) {
            p7k[3] += (p7k[4] & 0b00000001) << 0;
            p7k[3] += (p7k[4] & 0b00000010) << 0;
            p7k[3] += (p7k[4] & 0b00000100) << 0;
            p7k[3] += (p7k[4] & 0b00001000) << 0;
            p7k[3] += (p7k[4] & 0b00010000) << 0;
            p7k[3] += (p7k[4] & 0b00100000) << 0;
            p7k[3] += (p7k[4] & 0b01000000) << 0;
        }
        if (p7k[2] == 2) {
            p7k[3] += (p7k[4] & 0b00000001) << 7;
            p7k[3] += (p7k[4] & 0b00000010) << 7;
            p7k[3] += (p7k[4] & 0b00000100) << 7;
            p7k[3] += (p7k[4] & 0b00001000) << 7;
            p7k[3] += (p7k[4] & 0b00010000) << 7;
            p7k[3] += (p7k[4] & 0b00100000) << 7;
            p7k[3] += (p7k[4] & 0b01000000) << 7;
            p7k[3] += (p7k[1] & 0b00000001) << 0;
            p7k[3] += (p7k[1] & 0b00000010) << 0;
            p7k[3] += (p7k[1] & 0b00000100) << 0;
            p7k[3] += (p7k[1] & 0b00001000) << 0;
            p7k[3] += (p7k[1] & 0b00010000) << 0;
            p7k[3] += (p7k[1] & 0b00100000) << 0;
            p7k[3] += (p7k[1] & 0b01000000) << 0;
        }
        if (p7k[2] == 3) {
            p7k[3] += (p7k[4] & 0b00000001) << 14;
            p7k[3] += (p7k[4] & 0b00000010) << 14;
            p7k[3] += (p7k[4] & 0b00000100) << 14;
            p7k[3] += (p7k[4] & 0b00001000) << 14;
            p7k[3] += (p7k[4] & 0b00010000) << 14;
            p7k[3] += (p7k[4] & 0b00100000) << 14;
            p7k[3] += (p7k[4] & 0b01000000) << 14;
            p7k[3] += (p7k[1] & 0b00000001) << 7;
            p7k[3] += (p7k[1] & 0b00000010) << 7;
            p7k[3] += (p7k[1] & 0b00000100) << 7;
            p7k[3] += (p7k[1] & 0b00001000) << 7;
            p7k[3] += (p7k[1] & 0b00010000) << 7;
            p7k[3] += (p7k[1] & 0b00100000) << 7;
            p7k[3] += (p7k[1] & 0b01000000) << 7;
            p7k[3] += (p7k[6] & 0b00000001) << 0;
            p7k[3] += (p7k[6] & 0b00000010) << 0;
            p7k[3] += (p7k[6] & 0b00000100) << 0;
            p7k[3] += (p7k[6] & 0b00001000) << 0;
            p7k[3] += (p7k[6] & 0b00010000) << 0;
            p7k[3] += (p7k[6] & 0b00100000) << 0;
            p7k[3] += (p7k[6] & 0b01000000) << 0;
        }
        if (p7k[2] == 4) {
            p7k[3] += (p7k[4] & 0b00000001) << 22;
            p7k[3] += (p7k[4] & 0b00000010) << 22;
            p7k[3] += (p7k[4] & 0b00000100) << 22;
            p7k[3] += (p7k[4] & 0b00001000) << 22;
            p7k[3] += (p7k[4] & 0b00010000) << 22;
            p7k[3] += (p7k[4] & 0b00100000) << 22;
            p7k[3] -= (p7k[4] & 0b01000000) << 22;
            p7k[3] += (p7k[1] & 0b00000001) << 15;
            p7k[3] += (p7k[1] & 0b00000010) << 15;
            p7k[3] += (p7k[1] & 0b00000100) << 15;
            p7k[3] += (p7k[1] & 0b00001000) << 15;
            p7k[3] += (p7k[1] & 0b00010000) << 15;
            p7k[3] += (p7k[1] & 0b00100000) << 15;
            p7k[3] += (p7k[1] & 0b01000000) << 15;
            p7k[3] += (p7k[6] & 0b00000001) << 8;
            p7k[3] += (p7k[6] & 0b00000010) << 8;
            p7k[3] += (p7k[6] & 0b00000100) << 8;
            p7k[3] += (p7k[6] & 0b00001000) << 8;
            p7k[3] += (p7k[6] & 0b00010000) << 8;
            p7k[3] += (p7k[6] & 0b00100000) << 8;
            p7k[3] += (p7k[6] & 0b01000000) << 8;
            p7k[3] += (p7k[8] & 0b00000001) << 0;
            p7k[3] += (p7k[8] & 0b00000010) << 0;
            p7k[3] += (p7k[8] & 0b00000100) << 0;
            p7k[3] += (p7k[8] & 0b00001000) << 0;
            p7k[3] += (p7k[8] & 0b00010000) << 0;
            p7k[3] += (p7k[8] & 0b00100000) << 0;
            p7k[3] += (p7k[8] & 0b01000000) << 0;
            p7k[3] += (p7k[8] & 0b10000000) << 0;
        }
        return p7k[3];
    }
    readByte() {
        var N0H = [arguments];
        N0H[4] = this.view.getUint8(this.index);
        this.index += 1;
        return N0H[4];
    }
    writeByte(z0w) {
        var v8$ = [arguments];
        this.view.setUint8(this.index, v8$[0][0]);
        this.index += 1;
    }
    readInt() {
        var A71 = [arguments];
        A71[6] = this.view.getInt32(this.index);
        this.index += 4;
        return A71[6];
    }
    writeInt(W6i) {
        var p5u = [arguments];
        this.view.setInt32(this.index, p5u[0][0]);
        this.index += 4;
    }
    readShort() {
        var R1R = [arguments];
        R1R[9] = this.view.getInt16(this.index);
        this.index += 2;
        return R1R[9];
    }
    writeShort(H8B) {
        var d_3 = [arguments];
        this.view.setInt16(this.index, d_3[0][0]);
        this.index += 2;
    }
    readUint() {
        var W2$ = [arguments];
        W2$[8] = this.view.getUint32(this.index);
        this.index += 4;
        return W2$[8];
    }
    writeUint(B2X) {
        var f8B = [arguments];
        this.view.setUint32(this.index, f8B[0][0]);
        this.index += 4;
    }
    readBoolean() {
        var h6P = [arguments];
        h6P[6] = this.readByte();
        return h6P[6] == 1;
    }
    writeBoolean(Y3I) {
        var l79 = [arguments];
        if (l79[0][0]) {
            this.writeByte(1);
        } else {
            this.writeByte(0);
        }
    }
    readDouble() {
        var V60 = [arguments];
        V60[4] = this.view.getFloat64(this.index);
        this.index += 8;
        return V60[4];
    }
    writeDouble(z4Z) {
        var O41 = [arguments];
        this.view.setFloat64(this.index, O41[0][0]);
        this.index += 8;
    }
    readFloat() {
        var I0l = [arguments];
        I0l[5] = this.view.getFloat32(this.index);
        this.index += 4;
        return I0l[5];
    }
    writeFloat(y4B) {
        var B0v = [arguments];
        this.view.setFloat32(this.index, B0v[0][0]);
        this.index += 4;
    }
    readUTF() {
        var d6I = [arguments];
        d6I[8] = this.readByte();
        d6I[7] = this.readByte();
        d6I[9] = d6I[8] * 256 + d6I[7];
        d6I[1] = new Uint8Array(d6I[9]);
        for (d6I[6] = 0; d6I[6] < d6I[9]; d6I[6]++) {
            d6I[1][d6I[6]] = this.readByte();
        }
        return (new TextDecoder()).decode(d6I[1]);
    }
    writeUTF(L3Z) {
        var Z75 = [arguments];
        Z75[4] = (new TextEncoder()).encode(Z75[0][0]);
        Z75[3] = Z75[4].length;
        Z75[5] = Math.floor(Z75[3] / 256);
        Z75[8] = Z75[3] % 256;
        this.writeByte(Z75[5]);
        this.writeByte(Z75[8]);
        Z75[7] = this;
        Z75[4].forEach(I_O);
        function I_O(s0Q, H4K, j$o) {
            var N0o = [arguments];
            Z75[7].writeByte(N0o[0][0]);
        }
    }
    toBase64() {
        var P4$ = [arguments];
        P4$[4] = "";
        P4$[9] = new Uint8Array(this.buffer);
        P4$[8] = this.index;
        for (P4$[7] = 0; P4$[7] < P4$[8]; P4$[7]++) {
            P4$[4] += String.fromCharCode(P4$[9][P4$[7]]);
        }
        return btoa(P4$[4]);
    }
    fromBase64(W69, A8Q) {
        var o0n = [arguments];
        o0n[8] = pako;
        o0n[6] = atob(o0n[0][0]);
        o0n[9] = o0n[6].length;
        o0n[4] = new Uint8Array(o0n[9]);
        for (o0n[1] = 0; o0n[1] < o0n[9]; o0n[1]++) {
            o0n[4][o0n[1]] = o0n[6].charCodeAt(o0n[1]);
        }
        if (o0n[0][1] === true) {
            o0n[5] = o0n[8].inflate(o0n[4]);
            o0n[4] = o0n[5];
        }
        this.buffer = o0n[4].buffer.slice(
            o0n[4].byteOffset,
            o0n[4].byteLength + o0n[4].byteOffset
        );
        this.view = new DataView(this.buffer);
        this.index = 0;
    }
    readObject() {
        var N7k = [arguments];
        N7k[9] = () => {
            var T82, U82, d82, E82, D82, P82, q82, B82, Z82;
            T82 = this.readByte();
            if (T82 == 0x07) {
                U82 = this.readByte();
                d82 = (U82 - 1) / 2;
                E82 = new Uint8Array(d82);
                for (var M82 = 0; M82 < d82; M82++) {
                    E82[M82] = this.readByte();
                }
                D82 = q2z["textDec"]["decode"](E82);
                if (!q2z["aliases"][D82]) {
                    throw new Error();
                }
                this["implicitClassAliasArray"]["push"](D82);
                P82 = new q2z["aliases"][D82]();
                P82["readExternal"](this);
                return P82;
            } else {
                q82 = (T82 - 1) / 4;
                B82 = this["implicitClassAliasArray"][q82];
                if (!q2z["aliases"][B82]) {
                    throw new Error();
                }
                Z82 = new q2z["aliases"][B82]();
                Z82["readExternal"](this);
                return Z82;
            }
        };
        N7k[7] = () => {
            var Q42, v42, H82, y42, z82, g42, t82, w42, O42, L42, s42, A42, p42, F42, k42, J42, n42, f42, r42, x42, i82, I42, S42, N42;
            Q42 = 0;
            v42 = 0;
            H82 = [];
            do {
                v42 = (this["readByte"]() - 1) / 2;
                Q42 += v42;
            } while (v42 == 64);
            y42 = this["readByte"]();
            for (var o42 = 0; o42 < Q42; o42++) {
                z82 = this["readByte"]();
                if (z82 === q2z["T_UNDEFINED"]) {
                    H82["push"](undefined);
                }
                if (z82 === q2z["T_NULL"]) {
                    H82["push"](null);
                }
                if (z82 === q2z["T_TRUE"]) {
                    H82["push"](true);
                }
                if (z82 === q2z["T_FALSE"]) {
                    H82["push"](false);
                }
                if (z82 === q2z["T_OBJ"]) {
                    g42 = this["readByte"]();
                    t82 = null;
                    if (g42 == 7) {
                        w42 = this["readByte"]();
                        O42 = (w42 - 1) / 2;
                        L42 = new Uint8Array(O42);
                        for (var W42 = 0; W42 < O42; W42++) {
                            L42[W42] = this["readByte"]();
                        }
                        t82 = q2z["textDec"]["decode"](L42);
                        this["implicitClassAliasArray"]["push"](t82);
                        if (!q2z["aliases"][t82]) {
                            throw new Error();
                        }
                        s42 = new q2z["aliases"][t82]();
                        s42["readExternal"](this);
                        H82["push"](s42);
                    } else if (g42 > 128) {
                        A42 = this["readByte"]();
                        p42 = this["readByte"]();
                        F42 = (p42 - 1) / 2;
                        k42 = new Uint8Array(F42);
                        for (var K42 = 0; K42 < F42; K42++) {
                            k42[K42] = this["readByte"]();
                        }
                        t82 = q2z["textDec"]["decode"](k42);
                        this["implicitClassAliasArray"]["push"](t82);
                        if (!q2z["aliases"][t82]) {
                            throw new Error();
                        }
                        J42 = new q2z["aliases"][t82]();
                        J42["readAnonymous"](this);
                        H82["push"](J42);
                    } else {
                        n42 = (g42 - 1) / 4;
                        t82 = this["implicitClassAliasArray"][n42];
                        if (!q2z["aliases"][t82]) {
                            throw new Error();
                        }
                        f42 = new q2z["aliases"][t82]();
                        f42["readExternal"](this);
                        H82["push"](f42);
                    }
                }
                if (z82 === q2z["T_ARRAY"]) { }
                if (z82 === q2z["T_STRING"]) {
                    r42 = this["readByte"]();
                    if (r42 % 2 == 0) {
                        x42 = r42 / 2;
                        H82["push"](this["implicitStringArray"][x42]);
                    } else {
                        i82 = 0;
                        I42 = (r42 - 1) / 2;
                        i82 += I42;
                        while (I42 == 64) {
                            I42 = (this["readByte"]() - 1) / 2;
                            i82 += I42;
                        }
                        S42 = new Uint8Array(i82);
                        for (var R42 = 0; R42 < i82; R42++) {
                            S42[R42] = this["readByte"]();
                        }
                        N42 = q2z["textDec"]["decode"](S42);
                        H82["push"](N42);
                        this["implicitStringArray"]["push"](N42);
                    }
                }
            }
            return H82;
        }
            ;
        N7k[8] = this["readByte"]();
        if (N7k[8] == q2z["T_NULL"]) {
            return null;
        }
        if (N7k[8] == q2z["T_UNDEFINED"]) {
            return undefined;
        }
        if (N7k[8] == q2z["T_OBJ"]) {
            return (1, N7k[9])();
        } else if (N7k[8] == q2z["T_ARRAY"]) {
            return (1, N7k[7])();
        } else {
            throw new Error();
        }
    }
};