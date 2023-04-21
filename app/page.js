import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../public/Avatar.png'


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

            <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2">
                {blog.map((item, index) => (
                    <a href={`/blog/${item.slug.split(" ").join("-")}`} key={index}>
                        <li class="list-none hover:cursor-pointer">
                            <div class="flex h-full flex-col justify-between rounded-md bg-neutral-900">
                                <div>
                                    <Image alt="Prueba" src={item.formated.img} width={350} height={200} class="w-full rounded-t-md" />
                                </div>
                                <div class="px-2 py-2">
                                    <header class="flex items-center justify-start">
                                        <div class="w-full text-left">
                                            <h2 class="flex flex-row items-center justify-between text-sm font-bold text-slate-200">{item.formated.title}</h2>
                                        </div>
                                    </header>
                                    <p class="text-sm text-neutral-300">
                                        {item.formated.subtitle}
                                    </p>
                                </div>
                                <footer class="flex items-center justify-between px-1 py-1">
                                    <div class="flex items-center gap-x-1">
                                        <Image src={Avatar} alt="Avatar developer" class="inline-block h-14 w-14 rounded-full p-1" />
                                        <span class="inline-flex items-center rounded bg-indigo-900 px-2 py-0.5 text-xs font-medium text-white">Juan G.</span>
                                    </div>
                                    <span class="inline-flex items-center rounded bg-zinc-700 px-2 py-0.5 text-xs font-medium text-white">{item.formated.date}</span>
                                </footer>
                            </div>
                        </li>
                    </a>
                ))}
            </div>

        </>
    )
}