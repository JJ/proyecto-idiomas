# BUENAS PRÁCTICAS SEGUIDAS PARA DESARROLLAR NUESTRO DOCKERFILE
A la hora de crear el **[Dockerfile](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Dockerfile)** es muy recomendable que sigamos unas buenas prácticas. En mi caso, he consultado esta [página](https://blog.arima.eu/es/2020/04/21/buenas-practicas-para-escribir-un-dockerfile.html) para ver cuáles eran dichas prácticas y además, he consultado otra [página]https://nodejs.org/en/docs/guides/nodejs-docker-webapp/() para aprender a desarrollar nuestro fichero.
1. **Escribir [.dockerignore](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/.dockerignore):** este archivo es equivalente al *.gitignore* y en él incluiremos aquellos ficheros que queremos que sean ignorados.
2. **Fusionar varios comandos RUN en uno solo:** como podemos ver en nuestro Dockerfile, tenemos un único comando RUN que ejecuta *npm install* y *npm install -g grunt-cli*.
~~~
RUN npm install && npm install -g grunt-cli
~~~
3. **No utilizar la etiqueta de imagen base 'latest':** esta etiqueta se utiliza por defecto cuando no se especifica ninguna otra y apuntará a una imagen diferente cuando se publique una nueva versión, por lo que nuestro *build* podría romperse. Por tanto, es recomendable usar una etiqueta específica.
~~~
FROM node:15.0-alpine3.10
~~~
4. **Usar una imagen base adecuada:** en nuestro caso es mucho mejor utilizar una imagen especializada con *Node.js* ya instalado a usar una imagen base de propósito general como *ubuntu*. En nuestro caso, por los motivos que ya hemos comentado en este [fichero](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pruebas-docker.md) hemos decidido usar **node:15.0-alpine3.10** como imagen base.
~~~
FROM node:15.0-alpine3.10
~~~
5. **Configurar WORKDIR y CMD:** debemos configurar *WORKDIR* para cambiar el directorio por defecto, en el que ejecutaremos nuestros comandos *RUN* y *CMD*. Para añadir *CMD* la forma más recomendada es poner el comando dentro de una matriz, poniendo una palabra por elemento, como podemos ver en nuestro caso:
~~~
CMD ["grunt","run:tests"]
~~~
6. **Mejor COPY que ADD:** por la simple razón de que *COPY* es más sencillo.
7. **Optimizar COPY y RUN:** deberíamos poner los cambios que se producen con menor frecuencia en la parte superior de nuestros Dockerfiles para aprovechar el almacenamiento en caché. Por este motivo, en nuestro *Dockerfile* primero copiamos el *package.json* y *package-lock.json*, instalamos las dependencias y luego añadimos el resto de archivos, de manera que cada vez que cambiemos nuestro código no tengamos que reinstalar los paquetes.
8. **Especificar variables de entorno:** es recomendable usar variables de entorno para establecer valores predeterminados en nuestro fichero. Nosotros hemos utilizado una variable de entorno que contiene nuestro directorio de trabajo.
~~~
ENV PROJECT_DIR=/home/irene/proyectoIdiomas
~~~
9. **Añadir metadatos a la imagen usando LABEL:** con *LABEL* podemos, por ejemplo, proporcionar información sobre quién es el encargado de mantener la imagen. Antes se usaba la opción *MAINTAINER* pero ahora está obsoleta.
~~~
LABEL maintainer Irene Cano Jerez
~~~