import { v4 as uuidv4 } from "uuid"

export class Product{
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;

    constructor(name, description, price, created_at, updated_at){
        if(!this.id){
            this.id = uuidv4()
        }

        Object.assign(this, {
            name, 
            description,
            price,
            created_at, 
            updated_at
        })
    }
}