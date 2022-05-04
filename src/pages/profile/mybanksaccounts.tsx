import { useEffect, useState } from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./profile";
import BankManager from "../../main/utils/bankManager";
import useGetUser from "../../main/hooks/useGetUser";
import IBankAccount from "../../main/interfaces/IBankAccount";

const MyBanksAccounts = ()=>{
    const user = useGetUser();
    const [bankAccounts, setBankAccounts] = useState([]);
    const fetchData = async () => {
        const result =await BankManager.getBankAccounts();
        setBankAccounts(result.data.data); 
    };
    
    useEffect(() => {
        fetchData();
        return () => {
            setBankAccounts([]);
        };
    }, []);

console.log(bankAccounts);
console.log(user.id)

    const renderHeader = () => {
        const headerElement = ['code', 'name', 'currency id', 'balance']

        return headerElement.map((key, index) => {
            return <th scope="row" key={index}>{key.toUpperCase()}</th>
        })
    }

    const bankList = bankAccounts.map((bank: IBankAccount) => {
        return(
            <tr key={bank.id}>
                <th scope="row">{bank.code}</th>
                <td>{bank.name}</td>
                <td>{bank.currencyId}</td>
                <td>{bank.balance}</td>
                
            </tr>
        )
    })

    
    return(
        <>
        <ProfilePage/>
        <div className="container">
            <table id='account' className="table table-bordered table-striped">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {bankList}
                </tbody>
            </table>
        </div>

        </>
    )
}

export default MyBanksAccounts;