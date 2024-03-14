import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp(props){

    const [name,setName] = useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();


    const handleSubmit = async (e)=>{
        e.preventDefault()
       await axios.post('http://localhost:3000/',{
        name:name,
        email:email,
        password:password
       })
        .then(result=>console.log(result))
        .catch(err=>{console.log(err)
            navigate('/auth')
        })
    }

    return (
        <div className="Auth-form-container">
        <form className="Auth-form" action="POST">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link to="/auth" className="link-primary" >
                Sign In
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                onChange={(e)=>setName(e.target.value)}
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/auth" type="submit" onClick={handleSubmit} className="btn btn-primary">
                Submit
              </Link>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
}