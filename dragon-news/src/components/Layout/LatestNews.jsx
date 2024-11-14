import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = props => {
    return (
        <div className='flex bg-base-200 p-2 gap-2'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quasi.</Link>
            </Marquee>
        </div>
    );
};

LatestNews.propTypes = {
    
};

export default LatestNews;