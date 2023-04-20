---
title: "Flask MongoDB CRUD"
subtitle: "Aprende a desarrollar una aplicacion de tareas que realice las operaciones CRUD usando Flask y mongodb"
date: "2023-04-6"
img: "https://i.postimg.cc/CK567xR4/maxresdefault.jpg"
---

![Flask](https://i.postimg.cc/cCKjL5cN/1-Um-IJa-QBs-I38-N5-Kk-Gk-TLw.png)


# Conexion hacia MongoDB y configuracion basica


```
from flask import Flask, request,Response,jsonify
from pymongo import MongoClient
from bson import json_util,ObjectId

app = Flask(__name__)


# La cadena de conexion a mongo db la almacene en .ENV
mongo_uri = os.environ.get('MONGO_URI')

# Aqui podemos guardar la conexion de nuestra BDD en una variable
client = MongoClient(mongo_uri)

# Aqui podemos definir el nombre de la Base De Datos que ella debe conectarse
db = client.DatosDB
```






# CRUD MongoDB usando Flask

## Operacion para agregar un dato a la Base de Datos

```
@app.route('/Agregar', methods=['POST'])
def Create: 
name = request.json['name'] # Aqui recibiremos nuestra informacion que envien desde un metodo POST bien sea usando axios, fetch etc...
if name:
    id = db.DatosColeccion.insert_one({'name': name,}) # DatosColeccion <- eso representa en cual coleccion de nuestra Base De Datos llamada DatosDB debe hacer el Proceso de efectuar el CRUD de Crear un dato
    response = {
            'id': str(id),
            'Nombre': name
}  # si queremos retornar lo que hemos mandado a guardar en la BDD para mostrar al cliente puedes mostrarlo asi

return response
```


## Operacion para Obtener Datos de la base de datos

Este código pertenece a una aplicación web creada con el framework Flask y está definiendo una ruta o endpoint llamada "/ObtenerDatos" que acepta solicitudes HTTP GET.

```
@app.route('/ObtenerDatos', methods=['GET'])
def userGet():
    fetch = db.DatosColeccion.find({}) # de esta forma podemos obtener todo los datos que le pidamos mediante el FIND({}) sin ningun filtro

    response = json_util.dumps(fetch)

    return Response(response, mimetype='application/json')
```

**Luego, la respuesta se convierte en formato JSON utilizando la función "json_util.dumps" de la biblioteca PyMongo y se devuelve como una respuesta HTTP con el tipo de contenido "application/json" utilizando la función "Response" de Flask.**


Ahora si queremos de alguna manera filtrar en la base de datos y que retorne los datos que le pidamos en especifico en base a el ID o si lo buscamos por su nombre y asi obtener todo los datos de ese Documento entero con solo filtrarle el nombre o id. Podemos Lograrlo de la siguiente manera

```
@app.route('/BuscarPor/<id>', methods=['GET'])
def userFind(id):
FindOne = db.DatosColeccion.find_one({"_id": ObjectId(id)}) # Filtramos la busqueda para que busque por el ID cuando el cliente hace la peticion. 
response= json_util.dumps(FindOne)
return Response(response, mimetype='application/json')
```


**Para hacer la misma busqueda pero en este Caso usando El nombre o incluso puede ser un campo email o cualquier otro campo. podemos hacerlo de esta manera**

```
@app.route('/BuscarPorNombre', methods=['POST'])
def ProdutoFind():
    # pasamos la variable desde el cliente con la palabra clave con la que debe buscar en la Base de datos
    Nombre = request.json['SearchName']
    # Se utiliza para hacer que la búsqueda sea insensible a mayúsculas y minúsculas.
    query = {"Nome": {"$regex": ".*{}.*".format(Nombre), "$options": "i"}} 
    # La consulta de búsqueda definida anteriormente se ejecuta en la base de datos "DatosColeccion" utilizando el método "find"
    FindAll = db.DatosColeccion.find(query)
    # Los resultados de la consulta se convierten en formato JSON utilizando la función "dumps" de la biblioteca "json_util" de PyMongo.
    response = json_util.dumps(FindAll)

    return Response(response, mimetype='application/json') # Retornar dato requerido con su palabra clave
```



## Operacion para Eliminar Datos de la base de datos 


```
@app.route('/EliminarPor/<id>', methods=['DELETE'])
def userDelete(id):
db.DatosColeccion.delete_one({"_id": ObjectId(id)}) # Dandole el ID mandado desde el cliente podemos mediante el id Eliminar todo un dato siempre y cuando coincida con el ID que queremos eliminar
response = jsonify({"Mensaje": "Documento con ID: " + id + "" " Fue eliminado"}) # retornar al cliente un mensaje de que el dato ya se encuentra eliminado
return response
```



## Operacion para Actualizar un documento entero o cierto campo de un documento



```
@app.route('/ActualizarPor/<id>', methods=['PUT'])
def updateUser(id):
Nombre = request.json['Nome'] # Recibiendo datos a actualizar desde el cliente

db.Datos.update_one({'_id': ObjectId(id)}, {"$set": {'Nombre': Nombre, 'Quantidade': quantidade}})

# mandar un mensaje al cliente para que vea que sus cambios fueron efectuados
response = jsonify({"Mensaje": "Campo con ID: " + id + "" " Fue actualizado"}) 
return response
```


**NOTA:** Esta línea utiliza el método **update_one** de PyMongo para actualizar un documento en la colección "DatosColeccion" de MongoDB. **La actualización se realiza mediante la especificación del identificador único _id** del documento que se actualizará, que se obtiene de la variable id. El segundo argumento de update_one es una operación de actualización en sí misma, que utiliza el operador $set para establecer los valores del campo 'Nombre' del documento que se actualizará a los valores recuperados de la solicitud JSON.


## Documentation

[Flask Documentacion](https://flask.palletsprojects.com/en/2.2.x/)

[Flask PyMongo Documentacion](https://flask-pymongo.readthedocs.io/en/latest/)


## Usar Flask con React

[React + Flask](https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i)

