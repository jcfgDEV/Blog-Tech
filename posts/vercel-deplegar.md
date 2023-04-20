---
title: "Desplegar NextJS o React app hacia Vercel"
subtitle: "Vercel es una plataforma en la nube que se utiliza para alojar aplicaciones web y sitios web estáticos."
date: "2023-03-24"
img: "https://i.postimg.cc/T3rX942k/1-p-Jd-Lv-OAPg-VTf-ESZl-Si-CTw-Q.png"
---




![Git](https://i.postimg.cc/VvBj4wTf/1-lem-PUUXQmg-BZHQF9-V-u-jw.png)


# ¿Que es Vercel?

Vercel es una plataforma en la nube que se utiliza para alojar aplicaciones web y sitios web estáticos. Es popular entre los desarrolladores web porque ofrece una experiencia de desarrollo y implementación sin problemas, junto con una escalabilidad y rendimiento excepcionales.



## Caracteristicas de Vercel

Vercel es compatible con varios marcos de desarrollo web populares, incluidos React, Next.js, Vue.js, Angular y más. Ofrece una variedad de características útiles, como implementaciones continuas, pruebas de visualización, análisis de rendimiento y más.


## Instalación de la CLI de Vercel

**Para descargar e instalar Vercel CLI, ejecute el siguiente comando:**

```pnpm
pnpm i -g vercel
```

```yarn
yarn global add vercel
```
```npm
npm i -g vercel
```
## Uso en un entorno CI/CD

Vercel CLI requiere que inicie sesión y se autentique antes de acceder al contenido específico del usuario o realizar tareas administrativas. En un entorno de terminal, puede usar **vercel login**

## Vercel

Para implementar sus proyectos de Vercel con el comando CLI de implementación de vercel.
El vercel comando se usa para implementar proyectos de Vercel y se puede usar desde la raíz del directorio del proyecto de Vercel o proporcionando una ruta al mismo.

**En la terminal se vera asi**

```git
$ vercel my-project
Vercel CLI 24.0.0
? Set up and deploy “my-project”? [Y/n] Y
? Which scope do you want to deploy to? my-username
? Link to existing project? [y/N] N
🔍  Inspect: git
✅  Linked to my-project
🍴  Forked to my-username/my-project
🌍  Created default scope (my-username)
🔗  Linked to my-username/my-project (created .vercel)
```

**NOTA:** Asegurate de configurar tu archivo gitignore para evitar subir carpetas o archivos que no queramos subir. como por ejemplo subir tu backend o el archivo .env


### Vercel Deploy

```
$ vercel deploy
Vercel CLI 24.0.0
🔍  Inspect: Project settings
📦  Preparing your code for deployment...
🔨  Building...
📂  Creating an optimized production build...

🚀  Deploying to production...
🌀  Building and deploying your project...
🔍  Verifying deploy...
🔍  Analyzing bundle size...

🎉  Your project has been successfully deployed!
🔗  https://my-project.vercel.app
```



## Desplegar Backend(si es externo a nextjs api)

Para desplegar una aplicación Flask a Vercel. al finalizar con tu proyecto Flask ejecutas ```pip freeze > requirements.txt ``` El archivo requirements.txt se utiliza para especificar las dependencias que necesita tu aplicación Flask para ejecutarse. 

**NOTA:** Debes crear un vercel.json en tu carpeta donde tengas tus archivos de backend. 

```
{
    "version": 2,
    "builds": [
        {
            "src": "Ruta de tu proyecto backend O Carpeta",
            "use": "@vercel/python",
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}
```

Entonces para desplegar tu Backend es el mismo proceso usando **vercel y vercel deploy**


## Roadmap

- [Documentacion General Vercel](https://vercel.com/docs/cli)

### Mas Informacion Relacionada

- [Empezar con Vercel](https://vercel.com/docs/concepts/get-started)




