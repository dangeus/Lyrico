import {Schema, model, Types} from "mongoose"

const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}],
    about: {type: String, default: ''},
    status: {type: String, default: 'online'},
    avatarUrl: {type: String, default: ''},
    favouriteTracks: [{type: Types.ObjectId, ref: 'Track'}],
    friends: [{type: Types.ObjectId, ref: 'User'}]
})

export default model('User', userSchema)