import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/user.png'

const Navbar = props => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="contact">Contact</Link>
                <Link to="about">About Us</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <div><img src={logo} alt="" /></div>
                <button className='btn btn-neutral rounded-none'>Login</button>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;