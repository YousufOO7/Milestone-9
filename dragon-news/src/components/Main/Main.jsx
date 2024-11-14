import PropTypes from 'prop-types';
import Header from '../Layout/Header';
import LatestNews from '../Layout/LatestNews';
import Navbar from '../Layout/Navbar';
import LeftNavbar from '../LayoutComponent/LeftNavbar';
import RightNavbar from '../LayoutComponent/RightNavbar';
import { Outlet } from 'react-router-dom';

const Main = props => {
    return (
        <div>
             <Header></Header>
            <section className='w-10/12 mx-auto py-2'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-10/12 mx-auto py-3'>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 pt-5 w-10/12 mx-auto gap-5'>
                <aside className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;