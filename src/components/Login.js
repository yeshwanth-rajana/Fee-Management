import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; 
export default function Login() {
  const [data, setData] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const submitHandler = () => {
    setShow(true);
    const login = { email: data.email, password: data.password };
    axios
      .post('http://localhost:8000/login', login)
      .then((res) => {
        console.log(res.data[0].login, res.data[0].roletype);
        localStorage.setItem('username', res.data[0].username);

        if (res.data[0].roletype === 'student' && res.data[0]) {
          alert('Logged in successfully as a student!');
          console.log(res.data[0]);
          navigate(`/student/${res.data[0].id}`);
        } else if (res.data[0].roletype === 'admin' && res.data[0]) {
          alert('Logged in successfully as an admin!');
          navigate(`/Adminpage/${res.data[0].id}`);
        } else {
          alert('Unknown role type or user not found!');
        }
        setData({ email: '', password: '' });
      })
      .catch((error) => {
        console.error('Error occurred during login:', error);
        alert('Login failed. Please check your credentials.');
      });
  };
  return (
    <center>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form className="form">
              <label className="ele" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter email"
                value={data.email}
                onChange={handler}
                required
              /><br></br><br></br>
              <label className="ele" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={data.password}
                onChange={handler}
                required
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitHandler}>
                Submit
              </button>
              <p>
                Don't have an account? <Link to="/signin">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </center>
  );
}
