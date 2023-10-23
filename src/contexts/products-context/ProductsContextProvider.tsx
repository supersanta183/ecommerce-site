"use client"
import { useState, createContext, useContext, ReactNode } from "react";

import { IProduct } from "@/models";

export interface IProductsContext {
  isFetching: boolean;
  setIsFetching(state: boolean): void;
  products: IProduct[];
  setProducts(products: IProduct[]): void;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);

const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "UseProductsContext must be used within a productsprovider"
    );
  }
  return context;
};

const ProductsProvider = ({ children }: {children:ReactNode}) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const ProductContextValue: IProductsContext = {
    isFetching,
    setIsFetching,
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={ProductContextValue}>
        {children}
    </ProductsContext.Provider>
  )
};

export { ProductsProvider, useProductsContext };
