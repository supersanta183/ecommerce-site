import React from "react";

import Product from "./Product/Product";
import Loading from "@/common/Loading";
import { IProduct } from "../../models";

interface ProductPageProps {
  products: IProduct[];
  isFetching: boolean;
}

const ProductPage = ({ products, isFetching }: ProductPageProps) => {
  return (
    <>
      {isFetching && <Loading />}
      {!isFetching && <div className="h-full w-full flex flex-wrap items-start">
        {products?.map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </div>}
    </>
  );
};

export default ProductPage;
