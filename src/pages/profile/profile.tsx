import { FC } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './profile.css';
import NavBar from "../dashboard/NavBar";
import FooterPage from "../dashboard/footer";

const ProfilePage : FC = ()=>{

    return(
        <>
        <NavBar/>
        <section id="tabs">
        <div className="container">
            
            <div className="row ">
                <div className="col-xs-12 ">
                    <nav>
                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <Link to="/mybanksaccounts" 
                            className="nav-item nav-link" 
                            id="nav-home-tab" data-toggle="tab"  
                            role="tab" aria-controls="nav-home" aria-selected="true">My Bank Accounts</Link>
                            <Link to="/bankaccountform" 
                            className="nav-item nav-link" 
                            id="nav-profile-tab" data-toggle="tab"  
                            role="tab" aria-controls="nav-profile" aria-selected="false">New Account</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
</section>

        </>
    )
}

export default ProfilePage;