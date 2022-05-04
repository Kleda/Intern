import { FC } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import onLogout from '../../main/store/stores/user/login.store.on-logout';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../main/store/redux/rootState";


const NavBar : FC = ()=>{
  const cart = useSelector((state: RootState)=>state.cart);
  
  const dispatch = useDispatch();

  const onSubmitHandler=(event: React.FormEvent) => {
    event.preventDefault();
      dispatch(onLogout());
  }

    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>

              <div className="collapse navbar-collapse" id="navbarButtonsExample">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" >This Web Application</Link>
                  </li>
                </ul>
            
              <div className="d-flex align-items-center">

                <div className="nav-item ">
                  <Link to="/cart" className="nav-link" >
                    <Badge color="secondary" badgeContent={cart.products.length}>
                      <ShoppingCartIcon />
                    </Badge>
                  </Link> 
                </div>
                
                  
                  <Link to="/profile">
                    <button type="button" className="btn btn-primary me-3">
                          Profile
                    </button>
                  </Link>

                    <button type="button" onClick={(e)=> onSubmitHandler(e)} className="btn btn-outline-primary">
                          Log out
                    </button>
                </div>
              </div>
            </div>
          </nav>
        </>
    )
}

export default NavBar;