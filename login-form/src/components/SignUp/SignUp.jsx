import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth } from '../../firebase_config';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = props => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(Email, Password)

        // resat mass
        setErrorMessage('');
        setSuccess(false);


        // password have to at least 6 character or longer
        if (Password.length < 6) {
            setErrorMessage("Password have to 6 character or longer");
            return
        }

        // terms condition
        if(!terms){
            setErrorMessage("Please accept our terms and condition");
            return
        }

        createUserWithEmailAndPassword(auth, Email, Password)
            .then(result => {
                console.log(result.user);
                setSuccess(true);

                // email verification address
                sendEmailVerification(auth.currentUser)
                .then(result => {
                    console.log("Verification email has been send");
                })
            })
            .catch(error => {
                console.log('ERROR', error.message);
                setErrorMessage(error.message);
                setSuccess(false);
            })
    }

    return (
        <div>
            <h2 className="text-4xl">this is sign up page</h2>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder="password"
                                className="input input-bordered" required />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className='btn btn-xs absolute top-12 ml-[280px]'>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label justify-start cursor-pointer">
                                <input type="checkbox" name='terms'  className="checkbox" />
                                <span className="label-text ml-4">Accept Our term and condition</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>

                    {
                        errorMessage && <p className='text-red-600'>{errorMessage}</p>
                    }
                    {
                        success && <p className='text-green-600'>Sign Up Successful!!</p>
                    }
                    <p>Already have account <Link to="/login">LogIn</Link></p>
                </div>
            </div>
        </div>
    );
};

SignUp.propTypes = {

};

export default SignUp;