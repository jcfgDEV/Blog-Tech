---
title: "Nextjs Primeros Pasos"
subtitle: "Crea tu primer Proyecto usando el framework Nextjs"
date: "2023-02-22"
img: "https://i.postimg.cc/BQnX5jWc/Copy-of-AWS-Amplify-blog-compress.png"
---


![Nextjs](https://i.postimg.cc/wx5whRxc/twitter-card.png)

## Next.js 13




#### Primeros Pasos




```bash
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

```
? What is your project named? => Nombre sin Mayusculas
? Would you like to use TypeScript with this project? ... No / Yes 
? Would you like to use ESLint with this project? ... No / Yes
? Would you like to use `src/` directory with this project? ... No / Yes
? Would you like to use experimental `app/` directory with this project? ... No / Yes
? What import alias would you like configured? ... @/*
```

con esto podemos empezar a crear nuestro proyecto. El arbol de archivos deberia verse algo como este ejemplo si elegiste YES en **Would you like to use src/ directory with this project?**

```
my-next-project/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── vercel.svg
│   └── manifest.json
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── api/
│   │   │   └── hello.js
│   │   └── index.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── Home.module.css
│   └── utils/
├── .gitignore
├── README.md
├── next.config.js
├── package.json
└── yarn.lock
```

En tal caso de que en esta pregunta hayas escogido **Would you like to use `src/` directory with this project? ...** NO 
entonces deberias poder ver un arbol de archivos algo como esto

```my-next-project/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── vercel.svg
│   └── manifest.json
├── src/
│   ├── app.js
│   ├── app.css
│   └── index.js
├── .gitignore
├── README.md
├── next.config.js
├── package.json
└── yarn.lock
```

Con este comando inicias un nuevo proyecto usando las nuevas funcionalidades de Nextjs13

```
npx create-next-app@latest --experimental-app 

yarn create next-app --experimental-app
  
```

Aqui puedes saber mas detalles de la nueva version de Nextjs13 

[Documentacion Beta](https://beta.nextjs.org/docs)
