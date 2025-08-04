import {Schema, model, Types} from "mongoose"

const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}],
    about: {type: String, default: ''},           // описание о себе
    status: {type: String, default: 'online'},     // статус пользователя
    avatarUrl: {type: String, default: ''},           // ссылка на аватар
    favoriteTracks: [{type: Types.ObjectId, ref: 'Track'}], // избранные треки
    friends: [{type: Types.ObjectId, ref: 'User'}]   // список друзей
})

export default model('User', userSchema)