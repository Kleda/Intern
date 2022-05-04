import IBankAccount from "../../main/interfaces/IBankAccount";
import IBankTransaction from '../../main/interfaces/IBankTransaction';
import axios from "axios";

class BankManager {
  static async getBankAccounts(): Promise<any> {
    let result = axios.get(`bankAccount/get-all?`);
    return result;
  }

  static async postTransaction(bankTransaction: IBankTransaction): Promise<void> {
    try {
      const res = await axios.post("banktransaction", bankTransaction);
      console.log(res.data);
      if (res.data) {
        window.location.pathname = "/";
      }
    } catch (e) {
      throw e;
    }
  }  

  
  static async getBankAccount(id: number): Promise<any> {
    let result = await (await axios.get(`bankAccount/${id}`)).data;
    return result;
  }

  static async createNewBankAccount(bankAccount: IBankAccount): Promise<void> {
    try {
      const res = await axios.post("bankAccount", bankAccount);
      console.log(res.data);
      if (res.data) {
        window.location.pathname = "/";
      }
    } catch (e) {
      throw e;
    }
  }

  static async getCurrencies(): Promise<any> {
    const res = await axios.get("currency/get-all");
    return res;
  }

  static async deleteBankAccount(id: number): Promise<void> {
    try {
      await axios.delete(`bankAccount/${id}`);
    } catch (e) {
      throw e;
    }
  }
}
export default BankManager;
