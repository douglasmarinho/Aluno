import { v4 as uuid} from "uuid";
import Products from "../entity/product";
import ProductInteface from "../entity/product.interface";
import ProductB from "../entity/product-b";

export default class ProductFactory{
    public static create(type: string, name: string, price: number): ProductInteface {
        switch(type){
            case "a":
                return new Products(uuid(), name, price);
            case "b":
                return new ProductB(uuid(), name, price);
            default:
                throw new Error ("Product type not supported");
        }

    }

}