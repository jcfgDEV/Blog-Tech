import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Link from 'next/link';
import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';
import Markdown from "markdown-to-jsx";


// Mapea la matriz de nombres de archivo y para cada uno de ellos reemplaza la extensión ".md" con una cadena vacía para obtener el nombre del archivo como un slug 
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

// Generar Dinamicamente el title del navegador
export async function generateMetadata({ params }) {
  const Slug = params.slug
  const markdown = fs.readFileSync(path.join('posts', Slug + '.md'), 'utf-8')
  const { data: formated, content } = matter(markdown)
  return {
    title: formated.title,
  };
}


const Blog = (props) => {
  const Slug = props.params.slug
  const markdown = fs.readFileSync(path.join('posts', Slug + '.md'), 'utf-8')
  const { data: formated, content } = matter(markdown)
  return (
    <>
      <button
        className="fixed top-40 -left-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-r-md text-xl p-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        <Link href="/">
          <MdOutlineArrowBackIosNew />
        </Link>
      </button>
      <div className="">
        <div className=" mt-4 text-center">
          <h1 className="text-2xl text-slate-600 ">{formated.title}</h1>
          <p className="text-slate-400 mt-2">{formated.date}</p>
        </div>
        <article className="prose max-w-5xl mx-auto px-9">
          <Markdown>
            {content}
          </Markdown>
        </article>
      </div>
    </>
  );
};

export default Blog;