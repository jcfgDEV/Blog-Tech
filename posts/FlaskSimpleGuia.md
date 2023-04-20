---
title: "Conectar Reactjs con flask"
subtitle: "Flask es un framework web ligero y flexible y fácil de aprender."
date: "2023-03-08"
img: "https://i.postimg.cc/tC2gvpdd/flask-banner.png"
---




![Flask](https://i.postimg.cc/SRVtj1Fn/1200px-Flask-logo-svg.png)


# Que es Flask

Flask es un framework web ligero y flexible escrito en Python que permite construir aplicaciones web de manera sencilla y eficiente. Flask se caracteriza por su simplicidad y su enfoque minimalista, lo que lo convierte en una herramienta ideal para construir aplicaciones pequeñas o medianas, así como prototipos de proyectos más grandes.



## Caracteristicas de Flask
Una de las características más destacadas de Flask es su modularidad. Flask se divide en diferentes módulos que ofrecen diferentes funcionalidades, lo que permite a los desarrolladores elegir solo los módulos que necesitan y personalizar la aplicación según sus necesidades. Además, Flask se integra fácilmente con otras bibliotecas y herramientas de Python, lo que amplía aún más su funcionalidad.


## ¿Como podemos empezar a usar Flask?


### Paso 1
Buscamos Python en google 
![paso 1](https://i.postimg.cc/rFk84D6c/Aspose-Words-cb3f9b21-86b4-4c97-9c11-5513b8f775f7-004.png)



### paso 2

![paso 2](https://i.postimg.cc/SNfmfmq9/Aspose-Words-cb3f9b21-86b4-4c97-9c11-5513b8f775f7-006.png)

### paso 3

![paso 3](https://i.postimg.cc/x1jnsBT4/Aspose-Words-cb3f9b21-86b4-4c97-9c11-5513b8f775f7-007.png)


### paso 4

![paso 4](https://i.postimg.cc/HkSHF3rs/Aspose-Words-cb3f9b21-86b4-4c97-9c11-5513b8f775f7-008.png)



**desde la version 2.7 en adelante. python instala por defecto pip. que es lo que usaremos mas adelante para poder trabajar con flask**


## Empezamos a crear nuestro proyecto de React

**Asegúrate de tener Node.js y NPM instalados en tu computadora.** Puedes descargarlos e instalarlos desde la página oficial de Node.js: [NodeJS](https://nodejs.org/)

Abre la terminal o línea de comandos en tu computadora y crea una nueva carpeta para tu proyecto.

Ingresa a la carpeta que acabas de crear en la terminal y ejecuta el siguiente comando para crear un nuevo proyecto de React utilizando la herramienta create-react-app:

```bash
  cd my-project
```
```bash
npx create-react-app nombre-de-tu-proyecto
```

**Este comando creará una nueva carpeta con el nombre que hayas especificado y configurará un proyecto de React básico.**


## Empezar a utilizar flask y conectarlo con React

Abre la terminal o línea de comandos en tu computadora y crea una nueva carpeta para tu proyecto de Flask.

Ingresa a la carpeta que acabas de crear en la terminal y crea un entorno virtual de Python utilizando el siguiente comando: **python3 -m venv nombre-de-tu-entorno-virtual**

Yo uso virtualenv asi que quedaria de esta forma

```bash
pip install virtualenv
cd nombre-de-la-carpeta *Donde ubicaras tu proyecto Flask*
virtualenv nombre-del-archivo-env 
```
**NOTA:** el virtualenv si no lo tienes instalado en tu directorio donde se encuentra python entonces el paso anterior donde esta **pip install virtualenv** lo deberas instalar primero. por lo general este comando solo se usa una vez. Ya despues vasta con que pongas **virtualenv nombre-del-archivo-env**

el resultado deberia quedar algo parecido asi 

```
nombre-de-tu-entorno-virtual/
├── Scripts/
│   ├── activate
│   ├── activate.csh
│   ├── activate.fish
│   ├── easy_install
│   ├── easy_install-3.9
│   ├── pip
│   ├── pip3
│   ├── pip3.9
│   ├── python -> python3.9
│   └── python3 -> python3.9
├── lib/
│   └── python3.9/
└── aqui ira tu archivo index.py
```


```
.\venv\Scripts\activate
```

- venv: representa el nombre que le puse a la carpeta cuando usamos el comando **python virtualenv nombre-del-archivo**

- Scripts: es una subcarpeta que contiene el archivo de script **activate**

- activate: Este es el comando que ejecuta el script activate para activar el entorno virtual de Python. Una vez ejecutado

en resumen quedaria asi: ``` .\venv\Scripts\activate  ```


# Notas:
Al finalizar con el proyecto si quieres desactivar el entorno puedes usar **deactivate**

Tambien si quieres enumerar todas tus dependencias y esto lo haces con un archivo llamado requirements.txt 
```
pip freeze > requirements.txt
```


## Un poco acerca del uso de Requirements.txt

En Flask, el archivo "requirements.txt" es un archivo de texto plano que se utiliza para enumerar todas las dependencias del proyecto Flask y sus versiones específicas que se requieren para que la aplicación funcione correctamente.


## Usando Flask

- Crearas un archivo index.py 

siempre que vayas a instalar alguna libreria utilizas pip install nombre-de-libreria 

```
from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body
```

Para iniciar el servidor puedes empezar usando en la terminal ya dentro de tu carpeta donde se encuentre tu directorio donde tengas todo configurado

**python index.py**

Resultado de la terminal

```* Serving Flask app 'index'
 * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http:// ip de tu servidor + el puerto
Press CTRL+C to quit
```
## Roadmap

- [Flask Documentacion](https://flask.palletsprojects.com/en/2.2.x/)
- [Flask practica simple](https://www.youtube.com/watch?v=Esdj9wlBOaI)

### Mas Informacion Relacionada

- [openwebinars](https://openwebinars.net/blog/que-es-flask/)

- [Devcamp](https://devcamp.es/que-es-flask/)



