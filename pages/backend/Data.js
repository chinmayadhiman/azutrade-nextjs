import { createClient } from "next-sanity";

const client = createClient({
  projectId: "kbnh7il4",
  dataset: "production",
  useCdn: false,
});

export const getProducts = async () => {
    const query = `*[_type == "product"]`;
    const product = await client.fetch(query);
  return product;
};
export const getAbout = async () => {
    const aboutq = await client.fetch(`*[_type == "aboutus"]`);
    const about = aboutq[0].aboutus[0].children[0].text;
    return about;
};
export const getCertificates = async () => {
    const certificates = await client.fetch(`*[_type == "certificate"]`);
    return certificates;
};
export const getFaq = async () => {
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
    const faq = await client.fetch(query);
    return faq;
};
