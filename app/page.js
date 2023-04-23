import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Image from 'next/image'
import Avatar from '../public/Avatar.png'
import Link from 'next/link'

async function getData() {
    const url = 'https://newsapi.org/v2/top-headlines';
    const params = {
        country: 'us',
        category: 'technology',
        pageSize: 7,
    };
    const res = await fetch(`${url}?${new URLSearchParams(params)}`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": 'Bearer 845da61583ad460bba7c8e260376c9c7',
        }
    });
    const data = res.json()
    return data
}


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

    const News = getData();
    const [datos] = await Promise.all([News]);
    

    function Format() {
        const date = new Date('2023-04-23T12:37:16.3519796Z');
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate
    }

    return (
        <>
            <div className="flex justify-center p-2 gap-2 flex-col md:flex-col lg:flex-row">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                    {blog.map((item, index) => (
                        <li className="list-none hover:cursor-pointer" key={index}>
                            <a href={`/blog/${item.slug.split(" ").join("-")}`}>
                                <div className="flex flex-col justify-between rounded-md bg-neutral-900">
                                    <div>
                                        <Image alt="Prueba" priority src={item.formated.img} width={350} height={200} className="w-full rounded-t-md" />
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
                                    <footer className="flex items-center justify-between">
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
                <div className='flex justify-center'>
                    <div className="max-w-lg lg:w-[320px] p-6">
                        <h1 className=' font-bold text-lg mb-4'>Noticias de Tecnologia </h1>
                        {datos.articles.map((item,index) => (
                            <li className="list-none hover:cursor-pointer" key={index}>
                                <Link href={item.url} target='_blank'>
                                    <div className="flex h-full flex-col justify-between rounded-md mb-5">
                                        <div>
                                            <Image alt="Prueba" priority src={item.urlToImage} width={350} height={200} className="w-full" />
                                        </div>
                                        <div className="px-2 py-2">
                                            <header className="flex items-center justify-start">
                                                <div className="w-full text-left">
                                                    <h2 className="flex flex-row items-center justify-between text-sm font-bold text-orange-500">{item.title}</h2>
                                                </div>
                                            </header>
                                            <p className="text-sm text-black font-bold">
                                                {item.description}
                                            </p>
                                        </div>
                                        <footer className="flex items-center justify-between px-1 py-1">
                                            <div className="flex items-center gap-x-1">
                                                <Image src={Avatar} alt="Avatar developer" priority className="inline-block h-14 w-14 rounded-full p-1" />
                                                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-bold text-black">{item.author}</span>
                                            </div>
                                            <span className="inline-flex items-center rounded bg-zinc-700 px-2 py-0.5 text-xs font-medium text-white">{Format(item.publishedAt)}</span>
                                        </footer>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}