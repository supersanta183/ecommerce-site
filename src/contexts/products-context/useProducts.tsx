import { useCallback } from 'react'

import { useProductsContext } from './ProductsContextProvider'
import { IProduct } from '@/models'
import { getProducts } from '@/services/products'

const useProducts = () => {
    const {
        isFetching,
        setIsFetching,
        products,
        setProducts,
    } = useProductsContext();

    const fetchProducts = useCallback(() => {
        setIsFetching(true);
        getProducts().then((products:IProduct[]) => {
            setIsFetching(false);
            setProducts(products);
        })
    }, [setIsFetching, setProducts]);

    return {
        isFetching,
        fetchProducts,
        products,
    };
};

export default useProducts