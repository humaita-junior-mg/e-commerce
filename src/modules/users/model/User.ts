import { v4 as uuidv4 } from "uuid"
import bcrypt from "bcryptjs"

export class User{
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    admin: boolean;

    constructor(name, email, password, created_at, updated_at){
        if(!this.id){
            this.id = uuidv4()
        }

        Object.assign(this, {
            name, 
            email,
            password: bcrypt.hashSync(password, 10),
            created_at,
            updated_at,
            admin: false
        })
    }
}