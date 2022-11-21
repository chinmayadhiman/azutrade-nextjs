import React from 'react'
import Link from "next/link";
import { getFaq } from "../backend/Data";
import faqbanner from "../public/images/faqbanner.png";
import Image from  'next/image'
const faq = ({ faqData}) => {
    
    return (
      <>
        <div className="flex md:my-28 w-full">
          <Image
            src={faqbanner}
            className="w-full"
            alt="Frequently Asked Questions"
          ></Image>
        </div>
        <div className="flex flex-col my-20">
          {faqData.length > 0 &&
            faqData.map(
              ({ _id, title = "", slug = "", post }) =>
                slug && (
                  <div key={_id} className="main-container">
                    {/* ---------------------Heading of category starts----------- */}
                    <div className="w-fit mx-auto my-4 px-5">
                      <div className="clipart w-fit text-5xl bg-orange-500 p-5 text-white ">
                        <Link
                          href="/category/[slug]"
                          as={`/category/${slug.current}`}
                        >
                          {title}
                        </Link>{" "}
                      </div>
                    </div>

                    {/*------------- post of category wise-------------- */}
                    <div className="post bg-orange-200 p-5 text-3xl list-decimal px-10 mx-8 pl-20 shadow-lg rounded-xl">
                      {post.length > 0 &&
                        post
                          .slice(0, 5)
                          .map(({ _id, title = "", link = "" }) => (
                            <li
                              key={_id}
                              className="ml-45 my-4 hover:text-cyan-800 tracking-wider w-fit hover:font-semibold "
                            >
                              <Link href={link}>{title}</Link>{" "}
                            </li>
                          ))}
                    </div>
                    <div
                      key={`${_id}-morebutton`}
                      className="flex gap-2 py-2 shadow-xl  items-center more text-2xl bg-orange-400 text-white w-fit rounded-lg absolute right-8  hover:font-semibold tracking-wider  hover:bg-white hover:text-orange-500"
                    >
                      <Link
                        href="/category/[slug]"
                        as={`/category/${slug.current}`}
                      >
                        <span className="p-5 py-8 text-xl ">Load More</span>
                        <span className="bg-white text-orange-500 p-2 rounded-r-xl hover:bg-orange-500 hover:text-white">
                          <i class="fa-solid fa-angles-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                )
            )}
        </div>
      </>
    );
}
export async function getServerSideProps(context) {
 const faqData = (await getFaq()) || [];
  return {
    props: {
      faqData,
    },
  };
}
export default faq