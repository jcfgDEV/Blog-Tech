import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Image from 'next/image'




export default async function Page() {
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
            <div className="p-1 flex justify-center">
                <section className=" bg-white grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 ">
                    {blog.map((item, index) => (
                        <div className="relative" key={index}>
                           <div>
                           <a href={`/blog/${item.slug.split(" ").join("-")}`}><Image priority src={item.formated.img} width={1024} height={240} className="w-[1024px] h-[240px] object-cover rounded-md cursor-pointer" alt="Cover Anime" /></a>
                           </div>
                            <div className=" absolute bottom-1 left-3 ">
                                <h2 className=" text-[#ffff] text-lg S ">{item.formated.title}</h2>
                                <span className=" text-sm text-white font-black S">{item.formated.date}</span>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    )
}