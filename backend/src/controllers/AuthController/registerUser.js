import UserDB from '../../models/UserDB.js';

const userDB = new UserDB();

/**
 * this controller registers a new user to the database
 */
const registerUser = async (request, response) => {
    try {
        const { email, password, confirmPassword } = request.body;

        // query the db for a user with the specified email
        const userExists = await userDB.getByEmail(email);

        // validate that the email is not being used
        if (userExists.length === 1) {
            return response.status(400).json({ message: 'this email is already being used!' });
        }

        // validate that the provided passwords match
        if (password !== confirmPassword) {
            return response.status(400).json({ message: 'passwords do not match' });
        }

        // register a new user to the database
        const newUser = new UserDB(email, password)
        userDB.create(newUser)
        
        // success
        response.status(200).json({
            message: `successfully registered ${registerUser.email} to the database!`,
        });
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            error: 'something went wrong on our side....'
        });
    }
}

export default registerUser;