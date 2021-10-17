import React from 'react';
import './Signup.css';
import logo from '../../images/logo2.png'
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="signup">
            <div className="common-img">
                <div className="mb-5">
                    <img src={logo} alt="" className="img-fluid" />
                </div>
                <form action="">
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" className="form-control btn btn-danger" value="Signup" />
                    </div>
                </form>
                <p>or, sign up with</p>
                <div className="d-flex justify-content-evenly mb-4">
                    <button className="btn btn-sm btn-danger">Google</button><button className="btn btn-sm btn-secondary">Github</button><button className="btn btn-sm btn-info">Facebook</button>
                </div>
                <p>Already User?<NavLink to="/login">Signin</NavLink> here</p>
            </div>
        </div>
    );
};

export default Signup;