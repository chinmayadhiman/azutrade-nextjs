import groq from "groq";

import { createClient } from "next-sanity";
import Header from "../../components/Header";
<Header/>;


const client = createClient({
  projectId: "kbnh7il4",
  dataset: "production",
  useCdn: false,
});
const Post = ({ post }) => {

    // console.log(post)
    try {
      return (
        <>
          <Header />
          <div className="absolute top-0 bg-orange-500 h-2 w-full z-50">

          </div>
          <div className="flex flex-col p-5 bg-orange-200 text-4xl ">
            {post &&
              post.map((item) => <li key={item.title} className="p-4 list-decimal ml-8">{item.title}</li>)}
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

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "category" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    };
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params;
    const post = await client.fetch(query, { slug });
    // console.log(post)
    return {
        props: {
            post: post[0].post,
        },
    };
}
export default Post;
