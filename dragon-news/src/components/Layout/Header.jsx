import PropTypes from 'prop-types';
import logoImage from '../../assets/logo.png'
import moment from 'moment';

const Header = props => {
    return (
        <div className='flex flex-col justify-center items-center text-center py-5'>
            <img className='w-[300px]' src={logoImage} alt="" />
            <h3 className='py-2 text-gray-400'>Journalism Without Fear or Favour</h3>
            <p className='pt-2 font-semibold'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;