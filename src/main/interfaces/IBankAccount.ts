
interface IBankAccount {
  	id?: number;
    code: string,
    name: string,
    currencyId: number,
    balance:number
}

export default IBankAccount;
