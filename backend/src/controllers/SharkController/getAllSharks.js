import SharkDB from '../../models/SharkDB.js';
const sharkDB = new SharkDB();

/**
 * 
 */
const getAllSharks = async (request, response) => {
    try {
        const sharks = await sharkDB.getAll();
        console.log(sharks)
        response.status(200).json({ sharks });
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'something went wrong on our side...'
        });
    }
}

export default getAllSharks;