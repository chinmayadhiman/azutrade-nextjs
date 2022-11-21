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

      <div className="flex bg-orange-500 w-fit shadow-2xl rounded-xl mx-auto items-center text-white hover:text-orange-500 hover:bg-white">
        <Link href={"/faq"}>
          <span className=" p-5 text-4xl  font-semibold ">Have Question? You Ask we Answer</span>
        </Link>
        <span className="icon bg-white text-orange-500 p-5 px-8 text-8xl rounded-r-xl hover:text-white hover:bg-orange-500">
           <Link href={"/faq"}>
          <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </span>
      </div>
    </>
  );
}



export default Product