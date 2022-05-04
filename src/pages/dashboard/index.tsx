import { FC } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar';
import FooterPage from './footer';
import ProductsPage from "./products";

const DashboardPage : FC = ()=>{
    return(
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <ProductsPage />
          <FooterPage/>
        </div>
    )
}

export default DashboardPage;