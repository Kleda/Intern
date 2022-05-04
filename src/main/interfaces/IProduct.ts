
interface IProduct {
    id?: number;
  name: string,
  shortDescription: string,
  longDescription: string,
  categoryId: number,
  price:number,
  base64Image: string,
  quantity: number
}

export default IProduct;
