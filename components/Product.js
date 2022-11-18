import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";


const Product = ({ products }) => {
   const client = createClient({
     projectId: "kbnh7il4",
     dataset: "production",
     useCdn: false,
   });
  
  const builder = imageUrlBuilder(client);
  return (
    <>
      <section className="categories" id="categories">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {products.map((item) => {
            return (
              <div className="box" key={item._id}>
                <img
                  src={`${builder.image(item.productimage).width(200).url()}`}
                  height="100"
                  alt=""
                  className="mx-auto"
                />
                <h3>{item.title}</h3>
                <h3>Rs {item.price}/-</h3>
              </div>
            );
          })}
        </div>
      </section>

      <div className="flex bg-orange-500 w-fit p-5 rounded-3xl text-white text-2xl font-semibold gap-5 items-center  mx-auto hover:cursor-pointer border-solid border-5 border-orange-500 hover:text-orange-600 hover:bg-white">
        <span className="text">Have Question? You Ask we Answer</span>
        <span className="icon">
          <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
        </span>
      </div>
    </>
  );
}



export default Product