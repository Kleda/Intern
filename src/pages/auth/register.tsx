import React, { FC } from "react"
import './Register.css'
import { useState } from "react";
import IUser from "../../main/interfaces/IUser";
import AuthManager from "../../main/utils/authManager";
import { Link } from "react-router-dom";

const Register : FC = ()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user: IUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        birthdate: birthdate,
        phone: phone,
        username: username,
        password: password
    }

    const onSubmitHandler=(event: React.FormEvent) => {
        event.preventDefault();
        console.log(user);
        AuthManager.register(user);
    }

    return (
      <div className="form-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <div className="form-container">
                    <h3 className="title">Register</h3>
                    <form className="form-horizontal" onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name"
                            onChange={(event)=> setFirstName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name"
                            onChange={(event)=> setLastName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email"
                            onChange={(event)=> setEmail(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Birthdate</label>
                            <input type="date" className="form-control" placeholder="Birthdate"
                            onChange={(event)=> setBirthdate(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" placeholder="Phone Number"
                            onChange={(event)=> setPhone(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username"
                            onChange={(event)=> setUsername(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                            onChange={(event)=> setPassword(event.target.value)}/>
                        </div>
                        <span className="signin-link">Already have an account? Click here to <Link to="/login">Login</Link></span>
                       <button type="submit" className="btn signup">
                            Create Account
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
      );
}

export default Register