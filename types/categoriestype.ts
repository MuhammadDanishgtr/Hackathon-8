export interface Category {
    _id : string;
    categories : string;
    title:string;
    _type : "categories";
    tags:string;
    image?: {
        asset:{
            _ref:string;
            _type:"image";
        }
    }
    products : number
    slug: {
        current: string
      }
}