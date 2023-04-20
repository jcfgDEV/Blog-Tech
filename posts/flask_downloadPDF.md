---
title: "Flask recurso Descargable"
subtitle: "creación de una aplicación web con Flask que permite a los usuarios descargar un archivo desde el servidor."
date: "2023-04-6"
img: "https://i.postimg.cc/DwVPbk2D/1-0-G5zu7-Cn-Xd-MT9p-Gb-YUTQLQ.png"
---



![NextAuth](https://i.postimg.cc/SNwjSmyX/flaskreact.jpg)


# Flask Descargar recursos desde el servidor

Es una práctica común en el desarrollo web, ya que a menudo se necesita permitir a los usuarios descargar recursos como archivos PDF, imágenes, videos, etc. Para lograrlo, es importante definir una ruta en tu aplicación Flask que maneje la solicitud GET del cliente y luego usar la biblioteca de Python para manejar archivos para obtener el contenido del archivo que se desea descargar. 


**NOTA:** Yo uso Firebase Storage para acceder al bucket donde tengo almacenado el pdf. aunque hay muchas otras opciones como Amazon S3 ...


LADO DEL SERVIDOR 

```python
from flask import Flask,send_file
import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage
from io import BytesIO
from flask_cors import CORS


cred = credentials.Certificate('./Ruta-Donde-Tengas-Tus-Credenciales-Json')
firebase_admin.initialize_app(cred, {
    'storageBucket': '*************'
})

@app.route('/download')
def download_file():
     # Nombre del archivo a descargar
    filename = "Nombre-del-archivo-identificar.pdf"
    # Obtener una referencia al archivo
    blob = bucket.blob(filename)
    # Descargar el archivo como bytes
    file_bytes = blob.download_as_bytes()
    download = BytesIO(file_bytes)
    # Enviar los bytes del archivo como una descarga
    return send_file(download, download_name="John", as_attachment=True, mimetype='application/pdf')


```


En el lado del cliente puedes enviar una peticion para pedir el recurso a descargar como pdf o imagenes etc...

```javascript
function handleDownload() {
        fetch('Ruta a donde debe enviar la peticion para pedir el recurso a descargar')
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'JuanG_Experiencia.pdf';
                link.click();
                URL.revokeObjectURL(url);
            })
            .catch(error => console.error(error));
    }


```

```javascript
<button onClick={handleDownload}>
 Download PDF 
</button>
```

## Documentation

[Flask Documentacion](https://flask.palletsprojects.com/en/2.2.x/)


## Usar Flask con React

[React + Flask](https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i)

