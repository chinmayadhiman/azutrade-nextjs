import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import ask from "../public/images/ask.gif";

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
                  className="mx-auto"
                />
                <h3>{item.title}</h3>
                <h3>Rs {item.price}/-</h3>
              </div>
            );
          })}
        </div>
      </section>
     
          
        <div className="faq my-5  w-fit text-center p-20  hover:bg-cyan-500 hover:cursor-pointer rounded-xl flex mx-auto gap-5 text-2xl font-semibold">
          <Link target="_blank" href={"/blogs"}>
            <button className="flex text-center justify-center text-2xl lg:text-4xl my-auto  hover:bg-cyan-500 p-10 lg:p-20">
             <span className="text-black pr-5">Have Question ? </span>  You Ask We answer
            </button>
          </Link>
        </div>
    </>
  );
}



export default Product