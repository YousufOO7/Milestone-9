import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

const AuthLayout = props => {
    return (
        <div className='bg-[#F3F3F3]'>
            <header className='py-5 w-10/12  mx-auto'>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

AuthLayout.propTypes = {
    
};

export default AuthLayout;