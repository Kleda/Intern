import axios from "axios";
import IProduct from "../interfaces/IProduct";

class ProductManager {

  static async getProducts(): Promise<any> {
    let result = axios.get(`product/get-all`);
    return result;
  }

  static async getProduct(id: number): Promise<any> {
    let result = await (await axios.get(`product/${id}`)).data;
    return result;
  }

  static async addNewProduct(product: any): Promise<void> {
    try {
      const res = await axios.post("product", product);
      console.log(res.data);
      if (res.data) {
        window.location.pathname = "/";
      }
    } catch (e) {
      throw e;
    }
}

  static async deleteProduct(id: number): Promise<void> {
    try {
      await axios.delete(`product/${id}`);
    } catch (e) {
      throw e;
    }
  }
}
export default ProductManager;
