import React from "react";
import Image from "next/image";

import { IProduct } from "@/models";

interface ProductInterface {
  product: IProduct;
}

const Product = ({ product }: ProductInterface) => {
  const sku = product.sku; //get image ID from product
  const productImagePath = `/products/${sku}-1-product.webp`; //get the image path with the custom image ID

  return (
    <div className="flex items-center w-64 ml-5 mt-5">
      <div className="card bg-base-100 shadow-xl h-120">
        <figure>
          <Image
            className="w-auto h-auto"
            src={productImagePath}
            width={200}
            height={200}
            alt="Shoes"
            priority
          />
        </figure>
        <div className="card-body flex items-center justify-center w-full bg-secondary">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <span>DKK {product.price}</span>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
