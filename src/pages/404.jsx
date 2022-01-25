import React from 'react';
import { useNavigate} from 'react-router-dom';
import MenuComponent from '../components/menuComponent';
import '../styles/404.scss';
const Notfoundpage = () => {

    const navigate = useNavigate();

    return (
        <div className='not-found'>
                    <MenuComponent/>
        <header >
            <h1 className='error-title'>404 - Page Not Found</h1>

            <button className='btn-back'  onClick={() => navigate('/')}>
                Go back to home
            </button>

            </header>
      </div>
    );
}
export default Notfoundpage;