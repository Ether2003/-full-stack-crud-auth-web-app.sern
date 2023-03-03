/**
 * this function
 */
import Cookies from "universal-cookie";
const cookies = new Cookies();

function handleLogout(navigate) {
    cookies.remove('token');
    navigate('login');
}

export default handleLogout;