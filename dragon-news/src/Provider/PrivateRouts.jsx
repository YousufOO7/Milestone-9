import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user && user?.email) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );
};

PrivateRouts.propTypes = {

};

export default PrivateRouts;