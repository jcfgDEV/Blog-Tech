<div className=" p-1 flex justify-center container mx-auto px-02 lg:px-0 xl:px-2">
    <section className=" bg-white grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 ">
        {blog.map((item, index) => (
            <div className="relative" key={index}>
                <a href={`/blog/${item.slug.split(" ").join("-")}`}><img src={item.formated.img} className="w-[1024px] h-[240px] object-cover rounded-md cursor-pointer" alt="Cover Anime" /></a>
                <div className=" absolute bottom-1 left-3 ">
                    <h2 className=" text-[#ffff] text-lg S ">{item.formated.title}</h2>
                    <span className=" text-sm text-white font-black S">{item.formated.date}</span>
                </div>
            </div>
        ))}
    </section>
</div>