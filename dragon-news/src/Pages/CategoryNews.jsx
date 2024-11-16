import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import NewCarts from './NewCarts';

const CategoryNews = props => {
    const { data: news } = useLoaderData();
    return (
        <div>
            <h3 className="text-lg font-semibold">Dragon News Home</h3>
            <div>
                {
                    news.map(singleNews => <NewCarts key={singleNews._id} news={singleNews}></NewCarts>)
                }
            </div>
        </div>
    );
};

CategoryNews.propTypes = {

};

export default CategoryNews;