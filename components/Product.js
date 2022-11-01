import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { CiLocationArrow1 } from "react-icons/ci";
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
              <div className="box">
                <img
                  src={`${builder.image(item.productimage).width(200).url()}`}
                  height="100"
                  alt=""
                  className='mx-auto'
                />
                <h3>{item.title}</h3>
                <h3>Rs {item.price}/-</h3>
              </div>
            );
          })}
        </div>
      </section>
      <div className="my-5  w-fit text-center p-10  hover:bg-orange-500 hover:cursor-pointer rounded-xl flex mx-auto gap-5 text-2xl font-semibold">
        <Link href={"/blogs"}>
          <button className="flex text-center justify-center text-4xl my-auto  hover:bg-orange-500">
            You Ask{" "}
            <span className="text-white faq flex gap-10 p-10 text-center">
              we answer <CiLocationArrow1 className="text-6xl font-bold" />
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}



export default Product