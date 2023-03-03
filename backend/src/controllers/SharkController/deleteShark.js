import SharkDB from '../../models/SharkDB.js';
const sharkDB = new SharkDB();

/**
 * 
 */
const deleteShark = async (request, response) => {
    try {
        await sharkDB.delete(request.params.id);

        response.status(200).json({
            message: 'successfully deleted a shark!'
        });

    } catch (error) {
        response.status(500).json({
            message: 'something went wrong on our side...'
        });
    }
}

export default deleteShark;