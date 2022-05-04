import { FC } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import './Products.css';
import './Cart.css';
import { useSelector } from "react-redux";
import { RootState } from "../../main/store/redux/rootState";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useGetUser from "../../main/hooks/useGetUser";
import BankManager from "../../main/utils/bankManager";
import { useDispatch } from "react-redux";
import { cartAction } from "../../main/store/stores/cart/cart.store";
import { Wrapper } from "./Cart.styles";


const Cart : FC = ()=>{
  const user = useGetUser();

  const dispatch=useDispatch();

  const [description, setDescription] = useState(null);
  const [bankAccountId, setBankAccountId] = useState(null);

  const cartt = useSelector((state: RootState)=>state.cart);
  
  const onSubmitHandler = (event:React.FormEvent) => {
    event.preventDefault();
    BankManager.postTransaction({
      amount: cart.totalPrice,
      action: 1,
      description: description,
      bankAccountId: bankAccountId, 
      isActive: true
    })
    dispatch(cartAction.resetCart);
  }

    const [bankAcc, setBankAcc] = useState([]);
    const fetchData = async () => {
        const result =await BankManager.getBankAccounts();
        setBankAcc(result.data.data); 
    };
    
    useEffect(() => {
        fetchData();
        return () => {
            setBankAcc([]);
        };
    }, []);


    const cart = useSelector((state:RootState)=> state.cart);
    const products=cart.products;
    const productList=products.map((p:any)=>{
        return (
            
            <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img
                src={`data:image/jpeg;base64, ${p.base64Image}`}
                className="img-fluid rounded-3" alt={p.name}/>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-muted">{p.shortDescription}</h6>
              <h6 className="text-black mb-0">{p.name}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <div>{p.quantity}</div>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6 className="mb-0">$ {p.price}</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
            </div>
            <hr className="my-4"/>
          </div>
            
        )
    })

  

    if(products.length===0){
        return <div>
          <Wrapper>
        <h2>Your Shopping Cart</h2>
        <p>No items in cart.</p> 
        <h2>Total: $ 0.00</h2>
    </Wrapper></div>
    }

    else
    return(

            <section className="h-100 h-custom" style={{backgroundColor: '#d2c9ff;'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{borderRadius:' 15px;'}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 className="mb-0 text-muted">{cart.products.length}</h6>
                  </div>
                  <hr className="my-4"/>
                    {productList}
                <Link to="/">
                  <div className="pt-5">
                    <h6 className="mb-0"><a href="#!" className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div></Link>
                </div>
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4"/>


                <form onSubmit={onSubmitHandler}>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">items: {cart.products.length}</h5>
                    <h5>$ {cart.totalPrice}</h5>
                  </div>

                  <h5 className="text-uppercase mb-3">Bank Account ID</h5>

                  <div className="mb-4 pb-2">
                    <select className="select"
                    onChange={(event)=> setBankAccountId(event.currentTarget.value)}>
                      {bankAcc.map(b => {
                  return (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  )})
              }
                    </select>
                  </div>

                  <h5 className="text-uppercase mb-3">Description</h5>

                  <div className="mb-5">
                    <div className="form-outline">
                      <input type="text" id="form3Examplea2" className="form-control form-control-lg" 
                      onChange={(event)=> setDescription(Number(event.target.value))}/>
                      <label className="form-label" htmlFor="form3Examplea2">Enter your description</label>
                    </div>
                  </div>

                  <hr className="my-4"/>

                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>$ {cart.totalPrice}</h5>
                  </div>

                  <button  type="submit" className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Register</button>
                </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Cart;



