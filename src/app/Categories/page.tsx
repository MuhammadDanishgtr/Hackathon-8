'use client';

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import React, { useEffect, useState } from "react";
import { Category } from "@/types/categoriestype";
import { client } from "@/src/sanity/lib/client";
import { Categoriess } from "@/src/sanity/lib/querries";

export default function Categories() {
  const [products, setProducts] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategory() {
      const fetchCategory: Category[] = await client.fetch(Categoriess);
      setProducts(fetchCategory);
    }
    fetchCategory();
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((category: Category) => (
            <Link
              key={category._id}
              href={`/category/${category._id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              {category.image && (
                <Image
                  src={urlFor(category.image).url()}
                  alt="Category you like"
                  fill
                  className="w-[424px] h-[424px] border rounded-[10px] object-cover transition-transform group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/40">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{category.categories}</h3>
                  <p className="text-sm opacity-80">{category.products}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
