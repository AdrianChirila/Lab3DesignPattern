import {Creature} from "./creature.types";
let mongoose = require('mongoose');
import {Schema} from "./schema.name";
import {Bonus} from "./bonuses";
const MongooseSchema = mongoose.Schema;

const creatureSchema = new MongooseSchema({
    identifier: {
        type: Number,
        uniq: true
    },
    specimen: {
        type: String,
        enum: Creature.values,
        required: true
    },
    bonus: {
        name: {
            type: String,
            enum: Bonus.values,
        },
        value: {
            type: Number
        }
    }
});

export default mongoose.model(Schema.Creaturre, creatureSchema);