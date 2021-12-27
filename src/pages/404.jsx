import React from 'react';
import { useNavigate} from 'react-router-dom';
const Notfoundpage = () => {

    const navigate = useNavigate();

    return (
        <div>
        <header >
            <h1>404 - Page Not Found</h1>
            <button  onClick={() => navigate('/')}>
                Go back to home
            </button>
            </header>
      </div>
    );
}
export default Notfoundpage;