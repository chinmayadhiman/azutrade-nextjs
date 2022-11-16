import React from 'react'
import Header from "../components/Header";
import Link from "next/link";
import client from "./client";

const nav = ({ cs}) => {
    // console.log(post);
    return (
      <>
        <Header />
        <div className="flex flex-col">
          {cs.length > 0 &&
            cs.map(
              ({ _id, title = "", slug = "", post }) =>
                slug && (
                  <div key={_id} className="main-container">
                    {/* ---------------------Heading of category starts----------- */}
                    <div className="w-fit mx-auto my-4 px-5">
                      <div className="clipart w-fit text-5xl bg-orange-500 p-5 text-white">
                        <Link
                          href="/category/[slug]"
                          as={`/category/${slug.current}`}
                        >
                          {title}
                        </Link>{" "}
                      </div>
                    </div>

                    {/*------------- post of category wise-------------- */}
                    <div className="post bg-orange-200 p-5 text-3xl list-decimal px-8">
                      {post.length > 0 &&
                        post.slice(0,5).map(({ _id, title = "", link = "" }) => (
                          <li key={_id} className="ml-45">
                            <Link href={link}>{title}</Link>{" "}
                          </li>
                        ))}
                    </div>
                    <div key={`${_id}-morebutton`} className="more text-2xl bg-cyan-500 text-white p-2 px-4 w-fit rounded-lg">
                      <Link
                        href="/category/[slug]"
                        as={`/category/${slug.current}`}
                      >
                        <span>Load More</span>
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
  const query = `
     *[_type=="category"]{
  title,
  slug,
  "post": *[_type=='post' && references(^._id)]{ 
  	title,
  	link,
	}
}
    `;
  const cs = await client.fetch(query);

  // const sp = post.slice(0, 10);

  return {
    props: {
      cs,
    },
  };
}
export default nav