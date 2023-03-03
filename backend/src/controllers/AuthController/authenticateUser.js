import jwt from 'jsonwebtoken';
import UserDB from "../../models/UserDB.js";

const userDB = new UserDB();

/**
 * this controller authenticates an existing user
 */
const authenticateUser = async (request, response) => {
    try {
        const { email, password } = request.body;

        // query the db for a user with the specified email
        const user = await userDB.getByEmail(email);

        // validate that a user with the specified email even exists
        if (user.length === 0) {
            return response.status(400).json({ message: 'invalid email or password' });
        }

        // validate that the users password matches the specified password
        if (user.password !== password) {
            return response.status(400).json({ message: 'invalid email or password' });
        }

        // signs a token with the authenticated users mongodb object id & email address
        const token = jwt.sign(
            { _id: user._id, email: user.email },        // payload
            process.env.JWT_SECRET || "keyboard cat",    // secret
            { expiresIn: '1d' }                          // options
        );

        // success
        response.status(200).json({
            message: `authentication successfull`,
            token,
        });
    } catch (error) {
        response.status(500).json({
            message: 'something went wrong on our side...'
        });
    }
}

export default authenticateUser;