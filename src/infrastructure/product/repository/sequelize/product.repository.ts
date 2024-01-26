import Products from "../../../../domain/product/entity/product";
import ProductRepositoryInterface from "../../../../domain/product/repository/product-repository-interace";
import ProductModel from "./product.model";


export default class ProductRepository implements ProductRepositoryInterface{
    
    async create(entity: Products): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price,
        });
        
    }

    async update(entity: Products): Promise<void> {
        await ProductModel.update({
            name: entity.name,
            price: entity.price,
        },
        {
            where: {id:entity.id}
        });

    }

    async find(id: string): Promise<Products> {
        const productModel = await ProductModel.findOne({where: {id}});

         return new Products(
            productModel.id,
            productModel.name,
            productModel.price,
         );
    }

    async findAll(): Promise<Products[]> {
        const productModels = await ProductModel.findAll();

        let products: Products[] =[];
        productModels.forEach(productModel=>{
            products.push(new Products(
                productModel.id,
                productModel.name,
                productModel.price,
             ));
        });

         return products;
    }
    
}