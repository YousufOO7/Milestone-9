import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = props => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.name}</div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="contact">Contact</Link>
                <Link to="about">About Us</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <div>
                    {
                        user && user?.email ? <div>
                            <img className='h-[40px] rounded-full' src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                        </div>
                            : <img src={logo} alt="" />
                    }

                </div>
                {
                    user && user.email ? <button onClick={logOut} className='btn btn-neutral rounded-none'>Log-Out</button>
                        : <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
                }

            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;