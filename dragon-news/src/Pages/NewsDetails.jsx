import PropTypes from 'prop-types';
import Header from '../components/Layout/Header';
import RightNavbar from '../components/LayoutComponent/RightNavbar';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = props => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-10/12 mx-auto grid md:grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className="text-semibold">Dragon news</h2>
                    <NewsDetailsCard></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

NewsDetails.propTypes = {
    
};

export default NewsDetails;