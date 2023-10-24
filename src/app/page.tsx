"use client";
import { useEffect } from "react";
import FilterBar from "../components/LeftSideBar/Filter/FilterBar";
import ProductPage from "../components/ProductPage/ProductPage";

import useProducts from "@/contexts/products-context/useProducts";

export default function Home() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="h-full">
      <div className="flex h-full">
        <div className="w-2/12 hidden lg:block">
          <FilterBar />
        </div>
        <div className="w-full lg:w-10/12">
          <ProductPage products={products} isFetching={isFetching} />
        </div>
      </div>
    </main>
  );
}
