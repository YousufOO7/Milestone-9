import PropTypes from 'prop-types';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = props => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-3">Login With</h3>
            <div className='*:w-full space-y-2'>
                <button className='btn'><FaGoogle></FaGoogle> Login With Google</button>
                <button className='btn'><FaGithub></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

SocialLogin.propTypes = {
    
};

export default SocialLogin;