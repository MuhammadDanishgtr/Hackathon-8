import { client } from "@/src/sanity/lib/client";
import { urlFor } from "@/src/sanity/lib/image";
import { Product } from "@/types/productstype";
import { groq } from "next-sanity";
import Image from "next/image";

interface ProductPageProps {
    params : Promise<{slug : string}>
}

async function getProduct (slug:string):Promise<Product>{
    return client.fetch(
        groq `*[_type== "products" && slug.current ==$slug][0]{
        _id,
        title,
        _type,
        category,
        image,
        price,
        priceWithoutDiscount,
        inventory,
        badge,
        description,
        tags,
        }`,{slug}
    )
}

export default async function ProductPage( {params}:ProductPageProps){
    const {slug} = await params;
    const product = await getProduct(slug)
    return(
        <div className="max-w-7xl mx-auto px-4 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {product.image && (
                        <Image 
                        src = {urlFor(product.image).url()}
                        alt= {product.title}
                        width={500}
                        height={500}
                        className="rounded large shadow-md"
                        />

                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-6xl font-bold">{product.title}</h1>
                    <p className="text-4xl font-bold" > Price: { product.price}</p>
                    <p className="text-4xl font-bold">PriceWithoutDiscount: {product.priceWithoutDiscount}</p>
                    <p className="text-4xl font-bold">Badge: {product.badge}</p>
                    <p className="text-4xl font-bold">Inventory: {product.inventory}</p>
                    <p className="text-3xl font-normal">Description: {product.description}</p>

                </div>

            </div>

        </div>

    )
}