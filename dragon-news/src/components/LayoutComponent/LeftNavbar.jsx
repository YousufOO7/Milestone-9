import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = props => {

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])

    return (
        <div>
            <h3 className="text-lg font-semibold">All Category ({categories.length})</h3>
            <div className='flex flex-col gap-2 mt-2'>
                {
                    categories.map(category => <NavLink
                        to={`/category/${category.category_id}`}
                        className='btn' key={category.category_id}
                    >{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

LeftNavbar.propTypes = {

};

export default LeftNavbar;