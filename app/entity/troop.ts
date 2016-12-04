import {Creature} from "./creature";
import {getRandomValueBetween} from "../utils/random";
export class Troop {
    private name: String;
    private creatures: [Creature];
    private strength : Number;

    constructor() {
        this.strength = getRandomValueBetween(1, 20);
        this.creatures = [];
    }

    public addCreature(creature: Creature) {
        this.creatures.push(creature);
        this.strength +=  creature.getStealthValue();
    }

    public getStrength() {
        return this.strength;
    }
}
