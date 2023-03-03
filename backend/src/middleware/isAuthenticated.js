import jwt from 'jsonwebtoken';

/**
 * this middleware function that checks ifthe HTTP request made to the URL that this,
 * middleware is binded to contains a valid json-web-token in the Authorization header
 */
const isAuthenticated = (request, response, next) => {
    try {
        // get token from the requests authorization header
        const token = request.headers.authorization || request.headers.Authorization;

        // validate that there is a token in the authorization header
        if (token === undefined) {
            return response.status(400).json({
                error: 'please provide an authorization token with your request!'
            });
        }

        // authentication successfull
        if (jwt.verify(token, process.env.JWT_SECRET || 'keyboard cat')) {
            return next();
        }

        // authentication failed
        return response.status(400).json({
            error: 'you are not authenticated to make this request!'
        });
    } catch (error) {
        return response.status(500).json({
            message: 'something went wrong on our side...'
        });
    }
}

export default isAuthenticated;