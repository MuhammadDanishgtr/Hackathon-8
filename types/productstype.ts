import { strict } from "assert";
import { Input } from "postcss";



export interface Product{
    _id : string;
    title : string;
    _type : "products";
    image?: {
        asset:{
            _ref:string;
            _type:"image";
        }
    }
    price : number;
    badge : string;
    priceWithoutDiscount: number;
    category?: string;
    description? : string;
    inventory:number;
    tags: string;
    slug: {
        _type: 'slug';
        current: string;
    }

}