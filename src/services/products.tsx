import axios from "axios"
import { IGetProductsResponse } from "@/models"

const isProduction = process.env.NODE_ENV === "production";

export const getProducts = async () => {
    let response: IGetProductsResponse;

    if(isProduction){
        response = await axios.get(
            'hejjeghedderemil.dk' //some link that contains products in json format
        )
    } else {
        response = require('@/static/json/products.json');
    }

    const { products } = response.data || [];

    return products;
}