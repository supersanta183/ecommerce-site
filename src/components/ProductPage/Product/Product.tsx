"use client";
import { useState } from "react";
import Image from "next/image";

import { IProduct } from "@/models";

interface ProductInterface {
  product: IProduct;
}

const Product = ({ product }: ProductInterface) => {
  const [isHovered, setIsHovered] = useState(false);

  const sku = product.sku; //get image ID from product
  const productImagePath = `/products/${sku}-1-product.webp`; //get the image path with the custom image ID
  const productSecondaryImagePath = `/products/${sku}-2-product.webp`;

  return (
    <div
      className="flex items-center w-64 ml-5 mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card bg-base-100 shadow-xl h-120">
        <figure>
          <Image
            className="w-auto h-auto"
            src={isHovered ? productSecondaryImagePath : productImagePath}
            width={200}
            height={200}
            alt="Shoes"
            priority
          />
        </figure>
        <div className="card-body flex items-center justify-center bg-secondary w-64 h-48 text-center">
          <h2 className="card-title h-1/4 text-lg">{product.title}</h2>
          <span className=" h-1/4 pt-2">DKK {product.price}</span>
          <div className="card-actions justify-end h-2/4">
            <button className="btn btn-accent">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
