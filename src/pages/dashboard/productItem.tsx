import React, { useState } from "react";
import { cartAction } from "../../main/store/stores/cart/cart.store";
import { useDispatch } from "react-redux";
           
const ProductItem=(props:any)=>{

  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch();
  
  const onSubmitHandler = (event:React.FormEvent) => {
    event.preventDefault();
    dispatch(cartAction.addProductToCart({
      product:item,
      quantity:quantity

    }));
  }
  
  const {item} = props;
  return(
  <div className="row p-2 bg-white border rounded mt-2">
  <div className="col-md-3 mt-1">
    <img className="img-fluid img-responsive rounded product-image" 
    src={`data:image/jpeg;base64, ${item.base64Image}`}/></div>
  <div className="col-md-6 mt-1">
      <h5>{item.name}</h5>
      <div className="mt-1 mb-1 spec-1">
        <span className="dot"></span>
        <span>{item.shortDescription}</span><span className="dot"></span>            
      </div>
      <p className="information">{item.longDescription}<br/><br/></p>
  </div>
  <div className="align-items-center align-content-center col-md-3 border-left mt-1">
      <div className="d-flex flex-column mt-4"  >
        <h4 className="mr-1">$ {item.price}</h4>
          <hr/>
          
          <form onSubmit={onSubmitHandler} >
            <div className="row">
              <div className="col-md-4">
                <input 
                  className='form-control' 
                  type='number' 
                  min='1' max='5' 
                  value={quantity} 
                  onChange={(event)=> setQuantity(Number(event.target.value))}
                />
              </div>
              <div className="col-md-6">
              <button className="btn btn-outline-primary btn-sm mt-2" type="submit">Add to cart</button>

              </div>
            </div>
          </form>
          
          <div>


</div>
      </div>

  </div>
  </div>)
}

export default ProductItem;


