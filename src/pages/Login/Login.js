import React from 'react';
import './Login.css';
import logo from '../../images/logo2.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, setUsers, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
                const user = result.user;
                setUsers(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            }).finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div className="login">
            <div className="common-img">
                <div className="mb-5">
                    <img src={logo} alt="" className="img-fluid" />
                </div>
                <form action="">
                    <div className="form-group mb-3">
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" className="form-control btn btn-danger" value="Login" />
                    </div>
                </form>
                <p>or, sign in with</p>
                <div className="d-flex justify-content-evenly mb-4">
                    <button onClick={handleGoogleLogin} className="btn btn-sm btn-danger">Google</button>
                    <button className="btn btn-sm btn-secondary">Github</button>
                    <button className="btn btn-sm btn-info">Facebook</button>
                </div>
                <p>New User?<NavLink to="/signup">Register</NavLink> here</p>
            </div>
        </div >
    );
};

export default Login;