import React from 'react'
import { getProducts } from "./backend/Data";
import Product from "../components/Product";
const ProductPage = ({product}) => {
  return (
    <>
      <div className="my-10 mt-20">
        <Product products={product} />
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
 const product = (await getProducts()) || [];
  return {
    props: {
      product,
    },
  };
}
export default ProductPage