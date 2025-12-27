import { Shape } from "./Shape.mjs";

export class Fixture {
    constructor() {
        this.shapeIndex = 0;
        this.name = "Unnamed Shape";
        this.friction = null;
        this.frictionPlayers = null;
        this.bounciness = null;
        this.density = null;
        this.color = 5209260;
        this.death = false;
        this.noPhysics = false;
        this.noGrapple = false;
        this.innerGrapple = false;
    }

    draw(ctx, map) {
        const shape = map.physics.shapes[this.shapeIndex];
        if (!shape) return;

        switch (shape.type) {
            case Shape.TYPE.BOX:
                shape.draw(ctx, map, this);
                break;
            case Shape.TYPE.CIRCLE:
                shape.draw(ctx, map, this);
                break;
            case Shape.TYPE.POLYGON:
                shape.draw(ctx, map, this);
                break;
        }
    }

    toJSON() {
        return {
            sh: this.shapeIndex,
            n: this.name,
            fr: this.friction,
            fp: this.frictionPlayers,
            re: this.bounciness,
            de: this.density,
            f: this.color,
            d: this.death,
            np: this.noPhysics,
            ng: this.noGrapple,
            ig: this.innerGrapple
        }
    }

    static fromJSON(json) {
        const fixture = new Fixture();
        fixture.shapeIndex = json.sh;
        fixture.name = json.n;
        fixture.friction = json.fr;
        fixture.frictionPlayers = json.fp;
        fixture.bounciness = json.re;
        fixture.density = json.de;
        fixture.color = json.f;
        fixture.death = json.d;
        fixture.noPhysics = json.np;
        fixture.noGrapple = json.ng;
        fixture.innerGrapple = json.ig;
        return fixture;
    }
}