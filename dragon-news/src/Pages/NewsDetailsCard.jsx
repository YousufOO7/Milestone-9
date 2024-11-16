import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetailsCard = props => {
    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={news?.image_url}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{news?.title}</h2>
                <p>{news?.details}</p>
                <div className="card-actions">
                    <Link to={`/category/${news.category_id}`} className="btn btn-error rounded-none text-white">All news in this category</Link>
                </div>
            </div>
        </div>
    );
};

NewsDetailsCard.propTypes = {

};

export default NewsDetailsCard;