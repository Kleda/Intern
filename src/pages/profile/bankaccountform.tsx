import { FC, useEffect } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ProfilePage from "./profile";
import { useState } from "react";
import IBankAccount from "../../main/interfaces/IBankAccount";
import BankManager from "../../main/utils/bankManager";


const NewBankAccount : FC = ()=>{

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [currencyId, setCurrencyId] = useState("");
    const [balance, setBalance] = useState("");
    const bankacc: IBankAccount ={
        code: code,
        name: name,
        currencyId:Number(currencyId),
        balance:Number(balance)
    };
    

    const onSubmitHandler=(event: React.FormEvent) => {

        event.preventDefault();
        BankManager.createNewBankAccount(bankacc)
    }

   
    const [currencies, setCurrencies] = useState([]);
    const fetchData = async () => {
        const result =await BankManager.getCurrencies();
        setCurrencies(result.data.data); 
    };
    
    useEffect(() => {
        fetchData();
        return () => {
            setCurrencies([]);
        };
    }, []);
    console.log(currencies);

    return(
        <>

        <ProfilePage/>
        <div className="form-bg ">
    <div className="container  ">
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <div className="form-container ">
                    <h3 className="title">Create new bank account</h3>
                    <form className="form-horizontal" onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <label>Code</label>
                            <input type="text" className="form-control" placeholder="Code"
                            onChange={(event)=> setCode(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Name"
                            onChange={(event)=> setName(event.target.value)}/>
                        </div>
                       

                        <div className="form-group">
                            <select 
                                className="form-select"
                                onChange={(event)=> setCurrencyId(event.target.value)}
                            >
                                <option>Currency Id</option>
                                {currencies.map(c => {
                                    return(
                                        <option key={c.id} value={c.id}>{c.description}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Balance</label>
                            <input type="text" className="form-control" placeholder="Balance"
                            onChange={(event)=> setBalance(event.target.value)}/>
                        </div>
                        
                            <button type="submit" className="btn signup">
                                Register
                            </button>
                     
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default NewBankAccount;