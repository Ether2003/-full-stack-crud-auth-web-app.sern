import SharkDB from '../../models/SharkDB.js';
const sharkDB = new SharkDB();

/**
 * 
 */
const updateShark = async (request, response) => {
    try {
        await sharkDB.update(request.params.id, request.body.name);

        response.status(200).json({
            message: 'successfully updated a shark!'
        });
    } catch (error) {
        response.status(500).json({
            message: 'something went wrong on our side...'
        });
    }
}

export default updateShark;