const Stealth  = 'stealth';
const Treasure  = 'treasure';
const Flee  = 'flee';

const bonuses = [Stealth, Treasure, Flee];

export class Bonus {
    static get values() {
        return bonuses;
    }

    static get Stealth() {
        return Stealth
    }

    static get Treasure() {
        return Treasure
    }

    static get Flee() {
        return Flee
    }
}