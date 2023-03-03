import handleLogout from "../api/handleLogout";
import CreateSharkForm from "../components/CreateSharkForm";
import SharkList from "../components/SharkList";
import UpdateSharkForm from "../components/UpdateSharkForm";
import { useNavigate } from 'react-router-dom';

const MySharksPage = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <header>
                <h1>MySharks</h1>
                <button onClick={(e) => {handleLogout(navigate)}}>Logout</button>
            </header>
            <div className="forms-container">
                <CreateSharkForm />
                <UpdateSharkForm />
            </div>
            <SharkList />
        </div>

    );
}

export default MySharksPage;