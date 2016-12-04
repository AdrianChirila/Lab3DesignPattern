import {Property} from "../utils/decorator";
import {Specimen} from "../models/creature.types";
import {Power} from "../utils/power";
import {getRandomValueBetween} from "../utils/creature";

const MAX_STEALTH = 10000000000000000;


export const dragonPower:Power = <Power> {
    execute(dragon: Creature) {
        //10 % chance of super power.
        let superPower = getRandomValueBetween(1, 10);
        if (superPower == 10) {
            console.log('')
            dragon.setStealthValue(dragon.getStealthValue() + MAX_STEALTH);
        }
    }
};

export const goblinPower:Power = <Power> {
    execute(goblin: Creature) {
        goblin.setStealthValue(goblin.getStealthValue() + 2);
    }
};

export const wizardPower:Power = <Power> {
    execute(wizard: Creature) {
        wizard.setStealthValue(wizard.getTreasureValue() + 1);
    }
};

export class Creature {
    private height:Number;
    private skinColor:String;
    private eyeColor:String;
    private eyeCount:Number;
    private specimen:Specimen.values;
    private power:Power;
    private flying:Boolean;
    private stealthValue;
    private treasureValue;

    constructor(specimen:Specimen.values, power:Power) {
        this.power = power;
        this.stealthValue = getRandomValueBetween(3, 15);
    }

    public bonus() {
        this.power.execute(this);
    }
    
    public getStealthValue() {
        return this.stealthValue;
    }

    public setStealthValue(value: Number) {
        this.stealthValue = value;
    }

    public getTreasureValue() {
        return this.getTreasureValue;
    }

    public setTreasureValue(value: Number) {
        this.treasureValue = value;
    }
}