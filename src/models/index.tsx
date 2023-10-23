export interface IProduct {
    id: number;
    sku: number; //used for fetching the correct image
    title: string;
    description: string;
    availableSizes: string[];
    style: string;
    category: string;
    colour: string;
    price: number;
    gender: string;
    currencyId: string;
    isFreeShipping: boolean;
  }

export interface IGetProductsResponse {
  data: {
    products: IProduct[];
  }
}