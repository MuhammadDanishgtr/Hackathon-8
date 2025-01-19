import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '6dx88lag',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
})

export interface Product {
  _id: string
  name: string
  slug: {
    current: string
  }
  price: number
  image: string
  inStock: boolean
}

export interface Category {
  _id: string
  name: string
  slug: {
    current: string
  }
}

export async function fetchProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product"]{
    _id,
    name,
    slug,
    price,
    "image": image.asset->url,
    inStock
  }`)
}

export async function fetchCategories(): Promise<Category[]> {
  return client.fetch(`*[_type == "category"]{
    _id,
    name,
    slug
  }`)
}

