---
title: "¿Que es Git?"
subtitle: "Git es un sistema de control de versiones distribuido"
date: "2023-03-11"
img: "https://i.postimg.cc/qBC75zdV/git-blog-header.png"
---




![Git](https://i.postimg.cc/PqyTpqTZ/image-1.png)


# ¿Que es Git?

Git permite a los desarrolladores trabajar en un mismo proyecto al mismo tiempo y coordinar el trabajo en equipo de manera eficiente. Con Git, los cambios realizados en los archivos se registran en un repositorio, lo que permite mantener un historial completo de todas las versiones de los archivos y revertir cambios si es necesario. Además, Git facilita la colaboración y el intercambio de código entre desarrolladores, permitiendo la integración de cambios realizados por diferentes miembros del equipo.



## Caracteristicas de Git

Uno de los aspectos más destacados de Git es su capacidad para manejar conflictos de manera eficiente. Cuando varios desarrolladores están trabajando en el mismo archivo y realizan cambios conflictivos, Git es capaz de detectar estos conflictos y ofrecer herramientas para resolverlos de manera eficiente.


- **Distribuido:** Git es un sistema distribuido, lo que significa que cada desarrollador tiene una copia local del repositorio completo. Esto permite que los desarrolladores trabajen de manera independiente sin afectar el trabajo de los demás y facilita la colaboración.

- **Rápido:** Git está diseñado para ser rápido y eficiente, lo que permite trabajar con repositorios grandes sin retrasos en la velocidad.

- **Seguro:** Git proporciona una sólida seguridad y privacidad para los proyectos, permitiendo controlar el acceso y mantener la integridad de los datos.

- **Ramificación** y fusión: Git permite crear ramas o bifurcaciones del código para trabajar en diferentes características o soluciones. Una vez finalizadas, estas ramas se pueden fusionar con la rama principal del proyecto.

- **Historial completo:** Git almacena todo el historial de cambios en el código, lo que permite ver y revertir cambios en cualquier momento.

- **Comunidad activa:** Git cuenta con una gran comunidad de desarrolladores y usuarios que proporcionan soporte y mejoran el software continuamente.

- **Integración con herramientas de desarrollo:** Git se integra fácilmente con herramientas de desarrollo como IDEs, sistemas de compilación y sistemas de integración continua.


## Descargar Git

- Paso 1 
![git1](https://i.postimg.cc/J0hRPKLR/Captura-de-ecr-2023-03-11-165740.png)



- paso 2
![git2](https://i.postimg.cc/jq8xLVH2/Captura-de-ecr-2023-03-11-165752.png)



- paso 3
![git3](https://i.postimg.cc/gknYhMsD/Captura-de-ecr-2023-03-11-165804.png)




# Configurar Git 

**Configurar Git:** Antes de comenzar a usar Git, es importante configurar su nombre de usuario y dirección de correo electrónico. Para hacer esto, abra la línea de comando y ejecute los siguientes comandos, reemplazando "John Doe" y "johndoe@example.com" con su propio nombre de usuario y dirección de correo electrónico


```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```



# **NOTA:**

Cuando ejecuta el comando **git config con la opción --global**, Git almacena la configuración en un archivo de configuración global en su máquina, que se utiliza automáticamente para todos los repositorios de Git que cree o clone
## Plataformas

**Plataformas de alojamiento de código:** plataformas de alojamiento de código como GitHub, GitLab y Bitbucket permiten alojar repositorios de Git en línea y proporcionan una variedad de características y herramientas adicionales para trabajar con Git, como control de acceso, seguimiento de problemas y integración continua.


## Empezando usar Github


El comando git remote add origin se utiliza para agregar el nuevo repositorio remoto a su repositorio de Git existente y establecerlo como el origen **(nombre comúnmente utilizado para el repositorio remoto principal).** El formato general del comando es el siguiente:


```git
git remote add origin <URL del repositorio remoto>
```

Donde ```<URL del repositorio remoto>``` es la URL del repositorio remoto que desea agregar. Por ejemplo, si desea agregar un repositorio remoto en GitHub, la URL sería algo como:

```
https://github.com/<usuario>/<repositorio>.git
```

### Comando basicos de uso habitual

- **Agregar archivos:** Ahora, para agregar los archivos que desea alojar github. se veria como este ejemplo:

```
git add .
```

**NOTA:** Esto agregará todos los archivos nuevos o modificados a Git para su seguimiento.


- **Confirmar cambios:** Una vez que haya agregado los archivos, debe confirmar los cambios en el repositorio de Git. Para hacer esto, ejecute el siguiente comando:

```
git commit -m "Primer commit"
```
Reemplace "Primer commit" con un mensaje que describa los cambios que realizó.


- **Ver estado:** En cualquier momento, puede verificar el estado del repositorio de Git. Para hacer esto, ejecute el siguiente comando:

```
git status
```
Esto mostrará los archivos que se han agregado y los cambios que se han realizado.


- **Subir cambios:** Finalmente, puede subir los cambios en su repositorio de Git a un servidor remoto. Para hacer esto, ejecute el siguiente comando:

```
git push origin master
```


### Ramas

Las ramas (branches en inglés) en GitHub son copias paralelas del repositorio principal de Git. Permiten a los desarrolladores trabajar en diferentes aspectos de un proyecto de manera independiente, sin afectar la rama principal del proyecto.
## Roadmap

- [Git Documentacion](https://git-scm.com/doc)

### Mas Informacion Relacionada

- [Git Download](https://git-scm.com/)




