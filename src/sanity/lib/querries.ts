import { groq } from "next-sanity";


export const allProduct = groq `*[_type=="products"]`;
export const featuredProduct = groq `*[_type=="products"][0..3]`;
export const topCategories = groq `*[_type=="products"][4..6]`;
export const popularProducts = groq `*[_type=="products"][7..11]`;
export const ourProducts = groq `*[_type=="products"][7..14]`;
export const instagramfeed = groq `*[_type=="products"][1..6]`;
export const gallery = groq `*[_type=="products"][3..7]`;
export const Categoriess = groq `*[_type=="categories"]{
  _id,
  categories,
  products,
  image,
  slug {
    current
  }
}`;