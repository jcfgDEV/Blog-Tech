import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Image from 'next/image'
import Avatar from '../public/Avatar.png'
import Link from 'next/link'



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
            <div className="flex justify-center p-2 gap-2">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 gap-y-4 md:gap-y-0 gap-3">
                    {blog.map((item, index) => (
                        <li className="list-none hover:cursor-pointer" key={index}>
                            <a href={`/blog/${item.slug.split(" ").join("-")}`}>
                                <div className="flex flex-col justify-between rounded-md bg-neutral-900">
                                    <div>
                                        <Image alt="Prueba" priority src={item.formated.img} width={350} height={206} className="w-full rounded-t-md" />
                                    </div>
                                    <div className="px-2 py-2">
                                        <header className="flex items-center justify-start">
                                            <div className="w-full text-left">
                                                <h2 className="flex flex-row items-center justify-between text-sm font-bold text-slate-200">{item.formated.title}</h2>
                                            </div>
                                        </header>
                                        <p className="text-sm text-neutral-300">
                                            {item.formated.subtitle}
                                        </p>
                                    </div>
                                    <footer className="flex items-center justify-between pr-5">
                                        <div className="flex items-center">
                                            <Image src={Avatar} alt="Avatar developer" priority className="inline-block h-14 w-14 rounded-full p-1" />
                                            <span className="inline-flex items-center rounded bg-indigo-900 px-2 py-0.5 text-xs font-medium text-white">Juan G.</span>
                                        </div>
                                        <span className="inline-flex items-center rounded bg-zinc-700 px-2 py-0.5 text-xs font-medium text-white">{item.formated.date}</span>
                                    </footer>
                                </div>
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}