import { Product } from "../model/Product";

export interface ICreateProductDTO{
    name: string;
    description: string;
    price: number;
}

export interface IProductsRepository{
    
    
    save({name, description, price}: ICreateProductDTO): void;
    findUserById(id: string): Product;
    editProduct(producttoedit: Product, name: string, description: string, price: number): Product;
    list(): Product[];

}