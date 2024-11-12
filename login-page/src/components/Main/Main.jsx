import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = props => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;