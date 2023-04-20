import './globals.css'
import Logo from './components/Logo.js'
import Link from 'next/link'
export const metadata = {
    title: "Blog John's Tech",
    description: 'Blog para tips y pequeños modulos de codigo y algunas cosas interesante',
    type: 'article',
    robots: {
        index: true,
    },
    icons: {
        icon: '/android-chrome-512x512.png',
        shortcut: '/favicon-32x32.png',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: "Blog John's Tech",
        description: 'Blog para tips y pequeños modulos de codigo y algunas cosas interesante',
        url: 'https://www.codegeekery.com/',
        siteName: 'codegeekery',
        images: [
          {
            url: 'https://i.postimg.cc/TYGn607B/Captura-de-ecr-2023-04-20-125934.png',
            width: 800,
            height: 600,
          },
          {
            url: 'https://i.postimg.cc/TYGn607B/Captura-de-ecr-2023-04-20-125934.png',
            width: 1800,
            height: 1600,
            alt: 'Imagen del sitio web',
          },
        ],
        locale: 'en-US',
        type: 'website',
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