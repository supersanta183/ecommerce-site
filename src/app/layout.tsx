import "./globals.css";

import Navbar from "../components/navbar/Navbar";
import { ProductsProvider } from "@/contexts/products-context/ProductsContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className=" bg-base-200 h-full">
          <ProductsProvider>
            <Navbar />
            {children}
          </ProductsProvider>
      </body>
    </html>
  );
}
