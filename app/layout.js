import './globals.css'
import Logo from './components/Logo.js'


export const metadata = {
    title: "Blog John's Tech",
    description: 'Blog para tips y pequeños modulos de codigo y algunas cosas interesante',
    type: 'website',
    robots: {
        index: true,
    },
    icons: {
        icon: '/android-chrome-512x512.png',
        shortcut: '/favicon-32x32.png',
        apple: '/apple-touch-icon.png',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    openGraph: {
        title: "Blog John's Tech",
        description: 'Blog para tips y pequeños modulos de codigo y algunas cosas interesante',
        url: 'https://www.codegeekery.com/',
        siteName: 'Blog John',
        image: 'https://i.postimg.cc/HnGKQ1rk/grid-0-1.png',
        images: [
            {
                url: 'https://i.postimg.cc/HnGKQ1rk/grid-0-1.png',
                secureUrl: 'https://i.postimg.cc/HnGKQ1rk/grid-0-1.png',
                alt: 'Logo Website Blog Tech',
                width: 1200,
                height: 630,
                type: 'image/png',
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Logo Website Blog Tech',
        description:'Blog para tips y pequeños modulos de codigo y algunas cosas interesante',
        creator: '@jcfgDEV',
        images: ['https://i.postimg.cc/HnGKQ1rk/grid-0-1.png'],
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