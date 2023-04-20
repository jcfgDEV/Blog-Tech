---
title: "SSR vs SSG en Next.js"
subtitle: "Los beneficios de usar SSR y SSG hábilmente marcan una gran diferencia en todas estas áreas."
date: "2023-03-06"
img: "https://i.postimg.cc/kgNqdbTz/Next-1024x538.png"
---




![Graphql](https://i.postimg.cc/mDShZHY5/ssr-ssg-overview.png)


# SSG y SSR

SSR y SSG son las dos técnicas que evolucionaron en la comunidad de desarrollo de software para resolver este mismo problema. ¿Qué son?

# SSG  
**SSG (Static Site Generation)** se refiere a la técnica de generar una página web estática antes de que se solicite. En lugar de generar la página web en tiempo real en el servidor, la página se pre-genera y se almacena en un archivo HTML que se entrega directamente al navegador del usuario

# SSR 

**SSR (renderizado del lado del servidor)** se refiere a la técnica de renderizar una página web en el servidor antes de enviarla al navegador del usuario. En este enfoque, el servidor envía una página HTML completamente renderizada al navegador del usuario, lo que significa que el navegador solo tiene que mostrar la página tal como se recibió


**En resumen, mientras que SSR** renderiza las páginas web en el servidor y las envía al navegador del usuario, **SSG genera páginas web estáticas** y las entrega directamente al navegador del usuario sin procesamiento adicional en el servidor.



## ¿Que Framework utilizan dicho conceptos?


- **Next.js: es un framework de React** que admite tanto SSR como SSG. Proporciona una forma sencilla de crear aplicaciones web que se pueden renderizar en el servidor o generar de forma estática. Next.js también ofrece características como el enrutamiento dinámico, la optimización de imágenes y la integración con CMS

- **Nuxt.js: es un framework de Vue.js** que también admite tanto SSR como SSG. Permite crear aplicaciones web de una sola página (SPA) o aplicaciones universales (SSR/SSG). Nuxt.js también ofrece características como el enrutamiento dinámico, la generación de rutas estáticas y la integración con CMS.

- **Gatsby: es un generador de sitios web estáticos que utiliza React**. Permite crear sitios web estáticos rápidos y seguros con datos de diversas fuentes, como CMS o APIs. Gatsby también admite la generación de páginas en tiempo de compilación (SSG) y en tiempo de ejecución (SSR).


## Roadmap

- [Nextjs](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)

### Mas Informacion Relacionada

- [SSG](https://www.cloudflare.com/es-es/learning/performance/static-site-generator/)

- [Blog](https://leonidasesteban.com/blog/ssg)


- [Guia](https://www.azion.com/es/blog/ssr-o-ssg-para-la-renderizacion-de-paginas/)

