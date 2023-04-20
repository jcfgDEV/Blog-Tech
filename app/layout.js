import './globals.css'
import Logo from './components/Logo.js'
import Link from 'next/link'
export const metadata = {
    title: "Blog John's Tech",
    description: 'Blog para tips y pequeños modulos de codigo y algunas cosas interesante',
    type: 'article',
    robots: {
        index: false,
    },
    icons: {
        icon: '/android-chrome-512x512.png',
        shortcut: '/favicon-32x32.png',
        apple: '/apple-touch-icon.png',
    },

}




export default function RootLayout({ children }) {
    return (
        <>
        <html lang="en">
            <body>
                <Logo />
                {children}
            </body>
        </html>
        </>
    );
}