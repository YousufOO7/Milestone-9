import PropTypes from 'prop-types';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNavbar = props => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <div className='pt-10'>
                <FindUs></FindUs>
            </div>
        </div>
    );
};

RightNavbar.propTypes = {
    
};

export default RightNavbar;