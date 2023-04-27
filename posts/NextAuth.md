---
title: "Autenticacion con NextAuth usando Nextjs"
subtitle: "Controla tus datos con tecnología de código abierto y una pila completa de soluciones."
date: "2023-04-6"
img: "https://i.postimg.cc/g02sGyck/Auth.png"
---


![NextAuth](https://i.postimg.cc/Vs9TNvfp/yuxiptjqj8pa4bvyffym.jpg)

# NextAuth

NextAuth.js proporciona una API de autenticación unificada que simplifica la integración de diferentes proveedores de autenticación y estrategias de autenticación. Los desarrolladores pueden implementar fácilmente la autenticación de usuario en su aplicación sin tener que escribir código complejo de autenticación. También proporciona funciones de inicio de sesión social, como Iniciar sesión con Google, Facebook, Twitter, etc.


```
npm install next-auth
```

# Guia Basica

**Agregar ruta API**

Para agregar NextAuth.js a un proyecto, cree un archivo llamado [...nextauth].js en pages/api/auth. Esto contiene el controlador de ruta dinámico para NextAuth.js que también contendrá todas sus configuraciones globales de NextAuth.js.


```javascript
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
//modulo donde se encuentra el modelo de la BDD mongo
import auth from "../../../model/modelo";
//libreria bcryptjs para mas adelate comprar la clave almaceada con la que recibimos en el formulario
import { compare } from "bcryptjs";
//conexion a mongoDB
import DBConnect from "../../../config/connect";

providers: [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
     email: { label: "Email", type: "text", },
    password: { label: "Password", type: "password", },
    },
    async authorize(credentials, req) {
    // Establecer conexión con la base de datos
    await DBConnect();
    // Buscar el usuario en la base de datos por su correo electrónico
    const user = await auth.findOne({
        email: credentials?.email,
    });

    // Si el usuario no se encuentra, lanzar una excepción
    if (!user) {
        throw new Error("E-mail não está cadastrado");
    }

    // Verificar si la contraseña es correcta
    const isPasswordCorrect = await compare(
        credentials.password,
        user.password
    );

    // Si la contraseña no es correcta, lanzar una excepción
    if (!isPasswordCorrect) {
        throw new Error("senha é incorreta");
    }

    // Si el correo electrónico y la contraseña son correctos, devolver el objeto de usuario
    return user;
}
      }
    }
  })
]


```

El caso anterior de uso es para autenticar un usuario con el correo y clave almacenada en una base de datos en especifico. puede ser mongodb o postgresql. Nextauth tiene muchos proveedores el cual podemos usar para hacer el mecanismo de inicio de sesion usando Google, Apple, Facebook , Github etc...


## Documentation

[NextAuth Documentacion](https://next-auth.js.org/getting-started/introduction)

