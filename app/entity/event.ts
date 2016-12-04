import {getRandomValueBetween} from "../utils/random";
export class Event {
    //difficulty = nr of guards
    private difficulty: Number;
    private perceptionValue: Number;

    constructor() {
        this.buildEvent();
    }

    private buildEvent() {
        //random number of guards
        this.perceptionValue = 0 ;
        this.difficulty = getRandomValueBetween(1, 5);
        //for each guard, random perception
        for(let i = 0; i < this.difficulty; i ++) {
            this.perceptionValue += getRandomValueBetween(1, 10);
        }
        //+ random number add on percpetionValue
        this.perceptionValue += getRandomValueBetween(1, 20);
    }

    public getPerceptionValue() {
        return this.perceptionValue;
    }

    public getDifficulty() {
        return this.difficulty;
    }
}