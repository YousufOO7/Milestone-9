import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = props => {
    const { createNewUser, setUser, updateProfileUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 5) {
            setError({ ...error, name: "Name must be five character longer!" });
            return;
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        createNewUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user);
                updateProfileUser({displayName: name, photoURL: photo})
                .then(() => {
                    navigate("/")
                })
                .catch(error => {
                    console.log(error)
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className='min-h-screen justify-center items-center flex'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='font-semibold text-center text-2xl'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    {
                        error.name &&
                        <label className="label text-red-600 text-xs">
                            {error.name}
                        </label>
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    {/* email form */}
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
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className='text-center'>Already Have An Account ? <Link to="/auth/login" className='text-red-500'>Login</Link></p>
            </div>
        </div>
    );
};

Register.propTypes = {

};

export default Register;