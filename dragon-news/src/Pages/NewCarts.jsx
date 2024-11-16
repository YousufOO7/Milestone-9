import PropTypes from 'prop-types';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewCarts = (props = {}) => {
    const { news } = props || {};
    return (
        <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden mt-2">

            <div className="flex items-center justify-between text-gray-500 text-xs mb-2">
                <div className="flex items-center">
                    <img src={news.author.img} alt={news.author.name} className="w-6 h-6 rounded-full mr-2" />
                    <span>{news.author.name}</span>
                </div>
                <span>{new Date(news.author.published_date).toLocaleDateString()}</span>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h2>

            {/* Card Content */}
            <div className="p-4">
                {/* Card Image */}
                <figure>
                    <img src={news.thumbnail_url} alt="news Thumbnail" className="w-full h-[350px] object-cover" />
                </figure>

                {/* Tag List */}
                <div className="text-gray-500 text-sm mb-2">
                    {news.details.slice(0, 100)}... <Link to={`/news/${news._id}`}>Read more</Link>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-orange-400">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`mr-1 ${i < Math.round(news.rating.number) ? '' : 'text-gray-300'}`} />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">{news.rating.number}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                        <FaEye className="mr-1" />
                        <span>{news.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewCarts.propTypes = {

};

export default NewCarts;