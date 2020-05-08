export class User {
    id:number;
    username: string
    email: string
    password: string
    // activeflag: boolean
    // orders:number
    // approvedOrders:number
    // rejectedOrders:number

}

export class Admin {
    id:number;
    adminname: string;
    email:string;
    password:string;
}

export class Product{
    id:number;
    name: string;
    image:string;
    prize:number;
}