import {Schema, model} from "mongoose"

const trackSchema = new Schema({
    title: {type: String, unique: true, required: true},
    artist: {type: String, unique: true, required: true}
})

export default model('Track', trackSchema)