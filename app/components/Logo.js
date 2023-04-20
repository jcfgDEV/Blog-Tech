// import Image from "next/image"
// import Logo from '../../public/Logo.png'
import Link from "next/link"


export default function LogoMenu() {
    return (
        <>
            <div>
                <div className='p-4 bg-slate-800 shadow-lg w-full'>
                    <Link href="/">
                        <h1 className="text-xl font-bold text-white">John&apos;s Blog</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}