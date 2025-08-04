import User from "../models/User.js"
import Track from "../models/Track.js"

class UserController {
    async getProfile(req, res) {
        try {
            const userId = req.user.id;

            const user = await User.findById(userId)
                .select('-password')
                .populate('favouriteTracks')
                .populate('friends', 'username avatarUrl')

            if (!user) {
                return res.status(404).json({message: 'User not found'})
            }

            res.status(200).json({user})
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Error fetching profile'});
        }
    }

    async updateProfile(req, res) {
        try {

        } catch (error) {
            console.error(error)
            res.status(500).json({message: 'Error updating profile'})
        }
    }
}

export default new UserController()