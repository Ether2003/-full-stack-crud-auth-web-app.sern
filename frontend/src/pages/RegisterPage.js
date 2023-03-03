import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/authApi";

const Registerpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    
    function handleRegistration(e) {
        e.preventDefault();

        register({ email, password, confirmPassword })
            .then((a) => {
                alert('registration successful!');
                navigate('/login');
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    }

    return (
        <>
            <div className="forms-container">
                <div className="form-container">
                    <h1>Register</h1>
                    <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <input type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}  />
                    <button className="button" onClick={handleRegistration}>Register</button>
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Registerpage;