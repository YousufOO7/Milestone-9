import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth } from '../../firebase_config';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = props => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const emailRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // resat mass
        setSuccess(false);
        setErrorMessage('');

        // Log In info
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            if(!result.user.emailVerified){
                setErrorMessage("Please verify your email")
            }
            else{
                setSuccess(true);
            }
        })
        .catch(error => {
            console.log("ERROR", error.message);
            setErrorMessage(error.message)
            setSuccess(false);
        })
    }

    const handleForget = () => {
        const email = emailRef.current.value;
        if(!email){
            console.log("Please verify your email")
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(result => {
                alert("we send a verification email to your email")
            })
        }
    }

    return (
        <div>
            <h2 className="text-4xl">This is login page</h2>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label 
                                onClick={handleForget}
                                className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            success && <p className='text-green-600'>LogIn is Successful</p>
                        }
                        {
                            errorMessage && <p className='text-red-600'>{errorMessage}</p>
                        }
                        <p>New to this website please <Link to="/signUp">SignUp</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;