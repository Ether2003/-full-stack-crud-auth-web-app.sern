import { Navigate, useNavigate } from "react-router";
import Cookies from "universal-cookie";
const cookies = new Cookies();

/**
 * 
 */
const PrivateRoute = ({ children }) => {
    if (cookies.get('token') == undefined) {
        return <Navigate to="/login" replace={true}/>;
    }

    return children;
}

export default PrivateRoute;