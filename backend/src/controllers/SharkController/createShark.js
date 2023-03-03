import SharkDB from '../../models/SharkDB.js';
const sharkDB = new SharkDB();

/**
 * 
 */
const createShark = async (request, response) => {
    try {
        const shark = new SharkDB(request.body.name);
        await sharkDB.create(shark);
        
        response.status(200).json({
            message: 'successfully created a new shark!'
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            message: 'something went wrong on our side...'
        });
    }
}

export default createShark;