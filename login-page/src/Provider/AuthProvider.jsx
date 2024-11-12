import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase_config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // SignUp form
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password)
    }

    // Login form
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password)
    }

    // make user stay
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Currently logged in', currentUser)
            setUser(currentUser);
            setLoading(false)

        return () => {
            unSubscribe();
        }
    })
   } , [])

    // sign out form
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        signUpUser,
        logInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {

};

export default AuthProvider;