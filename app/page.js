import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'


export default function Page() {
    // Leer la carpeta posts que contiene los archivos estaticos MD para crear el conenido
    const files = fs.readdirSync(path.join('posts'))
    // Leerlos y reemplazar el .md por  " " algo vacio para quitar la extension
    const blog = files.map(filename => {
        //  reemplazado el .md con " "
        const slug = filename.replace(".md", "")
        // Obtener el metadato que esta al principio de el documento MD
        const markdownMatter = fs.readFileSync(path.join('posts', filename), 'utf-8')
        // dato ordenado de el archivo MD y su metadata 
        const { data: formated } = matter(markdownMatter)
        return {
            slug,
            formated
        }
    })


    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
                <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                    {blog.map((item, index) => (
                        <article
                            key={index}
                            className="relative w-full h-80 object-cover group rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                            <div className="absolute inset-0">
                                <Image
                                    src={item.formated.img}
                                    alt='Imagen de las cartas de post'
                                    fill
                                    quality={75}
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:opacity-30 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full flex flex-wrap justify-center items-center text-center">
                                <Link className="text-white text-xl font-bold" href={`/blog/${item.slug}`}>
                                    <span className="absolute inset-0"></span>
                                    {item.formated.title}
                                </Link>
                                <p className="text-white font-bold absolute bottom-0 left-0 p-2">{item.formated.date}</p>
                                <p className="text-white font-bold absolute bottom-10 left-0 p-2">{item.formated.subtitle}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </>
    )
}