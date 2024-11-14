import PropTypes from 'prop-types';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = props => {
    return (
        <div>
            <h3 className="text-lg font-semibold">Find Us On</h3>
            <div className='*:w-full space-y-2'>
                <button className='btn justify-start'><FaFacebook></FaFacebook> Facebook</button>
                <button className='btn justify-start'><FaInstagram></FaInstagram> Instagram</button>
                <button className='btn justify-start'><FaTwitter></FaTwitter> Twitter</button>
            </div>
        </div>
    );
};

FindUs.propTypes = {
    
};

export default FindUs;