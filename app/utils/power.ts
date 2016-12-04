import {Creature} from "../entity/creature";
export interface Power {
    execute(source: Creature): any;
}