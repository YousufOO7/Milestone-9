import PropTypes from 'prop-types';
import { useContext } from 'react';
import  { AuthContext } from '../../Provider/AuthProvider';

const SignUp = props => {
    const {signUpUser} = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
        // signUp info
        signUpUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log("ERROR", error.message);
        })
    }

    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

SignUp.propTypes = {

};

export default SignUp;