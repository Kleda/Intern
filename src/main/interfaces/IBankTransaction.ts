
interface IBankTransaction {
    id?: number;
  bankAccountId: number,
  action: number,
  amount: number,
  description: string,
  isActive: true
}

export default IBankTransaction;
