import {Creature, dragonPower, goblinPower, Event} from "./entity";
import {Power} from "./utils/power";
import {Specimen} from "./models/creature.types";
import {read} from "./utils/reader";
import {Troop} from "./entity/troop";
const mongoose = require('mongoose');
console.log('Start app');

export const COMMANDS = {
    NEW_TROOP: '1',
    NEW_CREATURE: '1',
}

function printMenu() {
    console.log('1 : Create a new troop');
}

async function addNewCreature(troop: Troop) {
    console.log('1: Add a new creature to current troop');
    console.log('2: Done.');
    let cmd:string = await read();
    switch (cmd) {
        case COMMANDS.NEW_CREATURE:
            console.log('Added new creature!');
            console.log('Type of creature (goblin/ wizard/ dragon)!Be aware of bonuses!')
            let specimen:string = await read();
            switch (specimen) {
                case Specimen.Goblin:
                    let goblin:Creature = new Creature(Specimen.Goblin, goblinPower);
                    console.log('Stealth value:', goblin.getStealthValue());
                    troop.addCreature(goblin);
            }
            return false;
        default:
            return true;
    }
}

(async() => {
    let cmd:string = await read();
    switch (cmd) {
        case COMMANDS.NEW_TROOP:
            let troop: Troop = new Troop();
            console.log('Initial strength:', troop.getStrength());
            let stop:Boolean = false;
            while (stop == false) {
                stop = await addNewCreature(troop);
            }
            console.log('Strength of troop::', troop.getStrength());
            break;
    }
})();

// let c: Creature = new Creature(Specimen.Goblin, goblinPower);
// let d: Creature = new Creature(Specimen.Dragon, dragonPower);
// d.bonus();
// console.log('Before:', c.getStealthValue())
// c.bonus();
// console.log('After:', c.getStealthValue())
//
// let e: Event = new Event();
// console.log('Dificulty:',e.getDifficulty());
// console.log('Perception',e.getPerceptionValue());
