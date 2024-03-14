import React, { useState } from "react"
import './LoginStyle.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login(props) {

	const [email,setEmail] = useState('');
	const [password,setPassword]=useState('');
    const navigate =useNavigate();

	 const handleSubmit= async (e)=>{
           e.preventDefault();
           await axios.post('http://localhost:3000/auth',{email,password})
		   .then(res => {console.log(res)
			if(res.data === "success"){
             alert("Success!!!")
                navigate('/items')
			}
      else{
        alert("Incorrect username or password.")
      }
		})
		.catch(err => console.log(err))

	}

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" action="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
			  onChange={(e)=>{setEmail(e.target.value)}}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
			  onChange={(e)=>{setPassword(e.target.value)}}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link  to="/items" type="submit" onClick={handleSubmit} className="btn btn-primary">
              Login
            </Link>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
