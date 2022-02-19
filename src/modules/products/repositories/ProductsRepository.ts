import { Product } from "../model/Product";
import { ICreateProductDTO, IProductsRepository } from "./IProductsRepository";


export class ProductsRepository implements IProductsRepository{

    private products: Product[]

    private static INSTANCE: ProductsRepository

    private constructor(){
        this.products = []
    }

    public static getInstance(){

        if(!ProductsRepository.INSTANCE){
            ProductsRepository.INSTANCE = new ProductsRepository()
        }

        return ProductsRepository.INSTANCE

    }

    save({ name, description, price }: ICreateProductDTO): void {
        
        const newproduct = new Product(name, description, price, new Date(), new Date())

        this.products.push(newproduct)

    }

    findUserById(id: string): Product {

        return this.products.find(product => product.id === id)
        
    }

    editProduct(producttoedit: Product, name: string, description: string, price: number): Product {

        Object.assign(producttoedit, {
            name,
            description,
            price,
            updated_at: new Date()
        })

        return producttoedit
    }

    list(): Product[] {

        return this.products

    }
}