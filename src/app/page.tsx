"use client"
import { useEffect } from "react"
import FilterBar from "../components/LeftSideBar/Filter/FilterBar"
import ProductPage from "../components/ProductPage/ProductPage"

import useProducts from "@/contexts/products-context/useProducts"

export default function Home() {
  const {isFetching, products, fetchProducts} = useProducts()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);

  return (
    <main className="h-full">
      <div className="flex h-full">
        <FilterBar/>
        <ProductPage products={products} isFetching={isFetching} />
      </div>
    </main>
  )
}
