import { FC } from "react"
import './Register.css'
import { useState } from "react";
import ILoginRequest from "../../main/interfaces/ILoginRequest";
import { useDispatch } from "react-redux";
import onLogin from '../../main/store/stores/user/login.store.on-login';
import { Link } from "react-router-dom";

const Login : FC = ()=>{

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user: ILoginRequest ={
    userName: username,
    password: password
};

  const onSubmitHandler=(event: React.FormEvent) => {

    event.preventDefault();
      dispatch(onLogin(user));
  }

  return (
    <div className="form-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <div className="form-container">
                    <h3 className="title">Login</h3>
                    <form className="form-horizontal" onSubmit={onSubmitHandler}>
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
                        <span className="signin-link">Don't have an account? Click here to <Link to="/register">Register</Link></span>
                  
                            <button type="submit" className="btn signup">
                                    Login
                            </button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}

export default Login