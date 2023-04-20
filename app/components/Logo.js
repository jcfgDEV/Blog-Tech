import Image from "next/image"
import Logo from '../../public/Logo.png'
import Link from "next/link"


export default function LogoMenu() {
    return (
        <>
            <div>
                <div className='p-3 bg-slate-800 shadow-lg w-full'>
                    <Link href="/">
                        <div className="flex items-center">
                            <Image src={Logo} width={90} height={0} className=" absolute" alt="Logo de el menu" />
                            <h1 className="text-xl font-bold text-white  translate-x-20">John&apos;s Blog</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}