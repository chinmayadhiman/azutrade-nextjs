import groq from "groq";
import faqbanner from "../../public/images/faqbanner.png";
import Image from "next/image";
import { createClient } from "next-sanity";
import Link from "next/link";

const client = createClient({
  projectId: "kbnh7il4",
  dataset: "production",
  useCdn: false,
});
const Post = ({ post }) => {

  console.log(post)
    try {
      return (
        <>
          <div className="flex mt-28 w-full">
            <Image
              src={faqbanner}
              className="w-full"
              alt="Frequently Asked Questions"
            ></Image>
          </div>
          ;
          <div className="post bg-orange-200 p-5 text-3xl list-decimal px-10 mx-8 pl-20 shadow-lg rounded-xl ">
            {post.length > 0 &&
              post.map(({ _id, title = "", link = "" }) => (
                <li
                  key={_id}
                  className="ml-45 my-8 hover:text-cyan-800 tracking-wider w-fit hover:font-semibold "
                >
                  <Link href={link}>{title}</Link>{" "}
                </li>
              ))}
          </div>
        </>
      );
    } catch (error) {
         return (
           <>
             <h1>Some Error Occured</h1>
           </>
         );
    }
   
};

const query = `*[_type == "category" && slug.current == $slug]{
  title,
  "post": *[_type=='post' && references(^._id)]{ 
  	title,
  	link,
	}
}`;

// export async function getStaticPaths() {
//     const paths = await client.fetch(
//         groq`*[_type == "category" && defined(slug.current)][].slug.current`
//     );

//     return {
//         paths: paths.map((slug) => ({ params: { slug } })),
//         fallback: true,
//     };
// }

export async function getServerSideProps(context) {
  
  const { slug = "" } = context.params;
    const post = await client.fetch(query, { slug });
    return {
        props: {
            post: post[0].post,
        },
    };
}
export default Post;
