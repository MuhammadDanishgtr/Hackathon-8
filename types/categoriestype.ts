export interface Category {
    _id : string;
    categories : string;
    _type : "categories";
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