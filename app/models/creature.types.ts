const Goblin  = 'goblin';
const Wizard  = 'wizard';
const Dragon  = 'dragon';

const specimens = [Goblin, Wizard, Dragon];

export class Specimen {
    public static get values() {
        return specimens;
    }

    static get Goblin() {
        return Goblin
    }

    static get Wizard() {
        return Wizard
    }

    static get Dragon() {
        return Dragon
    }
}