---
title: "Vercel Edge Functions"
subtitle: "Basic Example of use Edge Functions"
date: "2023-05-07"
img: "https://i.postimg.cc/nzSp8r4z/twitter-card.png"
---


![Flask](https://i.postimg.cc/T3rX942k/1-p-Jd-Lv-OAPg-VTf-ESZl-Si-CTw-Q.png)


## Vercel Edge Functions

Las funciones Edge de Vercel le permiten entregar contenido dinámico y personalizado con el peso ligero
Tiempo de ejecución perimetral

**¿Como es esto asi?**

Las funciones de Edge son funciones sin servidor que se ejecutan en las ubicaciones de Edge de Vercel cercanas al origen de su usuario.

Por esto esto los hacen muy buenos para Api de geolocalizacion, Apis que nesesiten ser ejecutados de forma breve y cercano del usuario que ejecuta la funcion. Tres posibles casos de usos pueden llegar a ser estos

- Indicadores de funciones y pruebas A/B: puede realizar experimentos con diferentes versiones de su contenido para diferentes usuarios o ubicaciones. Con el tiempo de ejecución de Edge, puede enrutar a sus usuarios de una manera más rápida.
- Autenticación: en lugar de la autenticación del lado del servidor, las solicitudes se pueden validar en el Edge más cercano al usuario en la red de Edge. Sus inicios de sesión se vuelven más rápidos.
- Localización: el tiempo de ejecución de Edge le brinda datos geográficos (país, región, ciudad) sobre sus usuarios. Así que puedes restringir o actualizar tu contenido para diferentes países.


un ejemplo simple para probar la funcion Edge puedes ver este ejemplo


```
import { NextResponse } from 'next/server';

export const config = {
    runtime: 'edge'
}

export default async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
```







## Fuentes

 - [Edge Runtime Api Suportadas](https://nextjs.org/docs/app/api-reference/edge)
 - [Vercel Documentacion](https://vercel.com/docs/concepts/functions/edge-functions)

