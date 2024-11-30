import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { authContext } from './Provider/AuthProvider';

const SignIn = () => {

    const {signInUser} = useContext(authContext)

    const handleSignIn = (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user)

            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};

            fetch(`http://localhost:5000/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('sign in info updated in db', data)
            })
        })
        .then(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
  <div className=" w-[300px] lg:w-[400px]">
    <div className="card bg-base-100 shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Log In</button>
        </div>
        <p>New to Coffee Drinker? <Link to={'/signup'} className='text-green-600'>Sign Up</Link></p>
      </form>
    </div>
  </div>
            </div>
        </div>
    );
};

export default SignIn