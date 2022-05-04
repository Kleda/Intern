import { FC } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ProductManager from '../../main/utils/productManager';
import './Products.css';
import ProductItem from "./productItem";
import { LinearProgress } from "@material-ui/core";

const ProductsPage : FC = ()=>{
        
        const [products, setProducts] = useState([]);
        const fetchData = async () => {
            const result =await ProductManager.getProducts();
            setProducts(result.data.data); 
        };
        
        useEffect(() => {
            fetchData();
            return () => {
                setProducts([]);
            };
        }, []);

        
        const productList = products.map((p:any) =>{
        return(
            <ProductItem item={p}/>
            )
        })
        console.log(products);
       
        if(products.length===0){
          return (<LinearProgress/>)
        }else{

        
    
    return(
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10">
                    <div>{productList}</div>
                </div>
            </div>
        </div>
    )}
}

export default ProductsPage;



