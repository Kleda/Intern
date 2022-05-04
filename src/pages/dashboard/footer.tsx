import { FC } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";

const FooterPage : FC = ()=>{

    return(
        <>
          <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50 position-bottom mt-auto">
            <div className="container text-center">
            <small>Copyright &copy; Your Website</small>
            </div>
        </footer>
        </>
    )
}

export default FooterPage;