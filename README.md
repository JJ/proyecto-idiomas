# PROYECTO PARA INFRAESTRUCTURA VIRTUAL - ProyectoIdiomasIV
Repositorio para el proyecto de la asignatura Infraestructura Virtual de la UGR. 20/21.


## :clipboard: DESCRIPCIÓN
 El microservicio escogido va a consistir en facilitar el aprendizaje de un idioma que no conocemos. Para ello podrá proporcionarnos frases populares, vocabulario junto con su traducción y significado, e incluso podremos añadir el vocabulario nuevo que estamos aprendiendo.

 ## :question: ¿POR QUÉ UN PROYECTO ENFOCADO A IDIOMAS? ¿DÓNDE RESIDE SU UTILIDAD?
 Hoy en día saber idiomas es algo muy importante ya que nos sirven tanto si buscamos trabajo, como si decidimos mudarnos a un país extranjero por el motivo que sea o simplemente porque nos guste poder tener la capacidad de comunicarnos con otras personas que no hablen nuestro idioma.

 Muchas veces, incluso en nuestra lengua natal, queremos decir una palabra pero no conseguimos dar con ella aunque sea una palabra que usas todos los días, entonces, se me ocurrió que sería muy práctico poder tener a mano un servicio que nos proporcione un listado de vocabulario y de frases típicas de un determinado idioma ya sea para consultar cómo se dice una palabra que conocemos en otro idioma, para saber el significado de una palabra o frase que sabemos o simplemente para anotar una palabra que acabamos de aprender.

 Por todo esto, considero que es de gran utilidad tener un microservicio de este tipo ya que nos facilita la tarea de aprender un idioma y nos permite tener organizado todo aquello que vamos aprendiendo para así poderlo consultar cuando nos haga falta.

## :mag_right: INSTALACIÓN Y EJECUCIÓN DE TESTS
En primer lugar, si queremos lanzar el proyecto debemos tener instalados **node, npm y grunt**. Una vez hecho esto, debemos acceder al directorio raíz del proyecto y ahí ejecutamos la siguiente orden para que se instalen las dependencias:
~~~
npm install .
~~~

A continuación, para llevar a cabo los tests vamos a usar Jest debido a varios motivos que expongo en este [documento.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/test-jest.md)
Como hemos instalado el gestor de tareas Grunt, para lanzar los test simplemente debemos ejecutar el siguiente comando:
~~~
grunt test
~~~

## :computer: CLASES IMPLEMENTADAS
En mi caso, a parte de las clases para gestionar las [excepciones](https://github.com/irenecj/proyecto-idiomas/tree/master/src/excepciones), tengo una clase, llamada **idioma.js**, la cual posee todas las funciones relacionadas con las operaciones que se pueden llevar a cabo con un listado de palabras, y las expresiones populares junto con una explicación de éstas. Esta clase es la principal de nuestro proyecto.
Por otro lado, tenemos otra clase, llamada **traduccion.js** la cual nos permite crear una palabra junto con su significado. Dentro de esta clase tenemos los métodos *get* y *set* necesarios para poder usar los objetos en la clase principal.
Podemos encontrar una explicación más detallada en [esta documentación](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/idioma-traduccion.md) y este es el [código fuente](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/src) del proyecto.


## :wrench: HERRAMIENTA DE CONSTRUCCIÓN
He utilizado el gestor de tareas **Grunt** con su correspondiente [Gruntfile.js](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Gruntfile.js).

Podemos acceder a la explicación de cómo lo hemos [diseñado.](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/gruntfile-docu.md)

## :whale2: DOCKER
Para la creación de un contenedor de pruebas, en primer lugar necesitamos elegir un contenedor base.
En la documentación correspondiente a este apartado tenemos un [documento](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pruebas-docker.md) donde comparamos las distintas imágenes oficiales junto con imágenes base con sistemas operativos y finalmente tomamos una decisión. Además, explicamos cómo hemos [optimizado](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/optimizacion.md) la imagen obtenida.

### DOCKERFILE
Para crear nuestro [Dockerfile](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/Dockerfile) hemos seguido una serie de [buenas prácticas.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/buenas-practicas-docker.md), además, el Dockerfile tiene comentarios acerca de la función de cada línea que añadimos.

### DOCKER HUB
En este [fichero](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/docker-hub.md) están explicados los pasos necesarios para subir correctamente nuestro [contenedor](https://hub.docker.com/r/irenecj/proyectoidiomasiv) a Docker Hub.

### GITHUB CONTAINER REGISTRY
En un principio pensé en probar a subir mi contenedor a [Azure](https://azure.microsoft.com/es-es/) lo que ocurre es que sólo tienen una prueba gratuita de 30 días por lo que prefiero dejarlo para más adelante. Por este motivo, he subido mi contenedor a **GitHub Container Registry** y en este [fichero](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/github-container-registry.md) podemos ver los pasos seguidos.

### EJECUCIÓN DE LOS TESTS A PARTIR DE LOS CONTENEDORES
En primer lugar debemos descargarnos el repositorio de GitHub.
Una vez hecho esto, debemos descargarnos la imagen y ejecutamos los test. Si usamos el contenedor de Docker Hub, ejecutamos el siguiente comando:
~~~
docker pull irenecj/proyecto-idiomas

docker run -t -v `pwd`:/test irenecj/proyecto-idiomas
~~~
Si usamos el contenedor de **GitHub Container Registry**, ejecutamos:
~~~
docker pull ghcr.io/irenecj/proyectoidiomas:latest

docker run -t -v `pwd`:/test ghcr.io/irenecj/proyectoidiomas:latest
~~~

## :closed_book: RECOPILACIÓN DE ENLACES ÚTILES
1.  [Configuración de git y creación de par de claves y subida de clave pública a GitHub.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/config.md)
2. [Elección y justificación de las herramientas y servicios utilizados.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/herramientas.md)
3. [Pasos a seguir para la realización del proyecto.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pasos.md)
4. [Acceso al código fuente del proyecto](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/src).
5. [Explicación detallada de las clases implementadas.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/idioma-traduccion.md)
6. [Acceso a los tests del proyecto.](https://github.com/irenecj/ProyectoIdiomasIV/tree/master/tests)
7. [¿Por qué elegir Jest para testear?.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/test-jest.md)
8. [Documentación sobre el Gruntfile.](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/gruntfile-docu.md)
9. [Optimización de la imagen usada en Docker.](https://github.com/irenecj/proyecto-idiomas/blob/master/docs/optimizacion.md)
10. [Elección del contenedor base.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/pruebas-docker.md)
11. [Buenas prácticas para diseñar un Dockerfile.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/buenas-practicas-docker.md)
12. [Subir contenedor a Docker Hub.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/docker-hub.md)
13. [Subir contenedor a GitHub Docker Registry.](https://github.com/irenecj/ProyectoIdiomasIV/blob/master/docs/github-container-registry.md)

## :heavy_check_mark: ISSUES Y MILESTONES
- [Listado](https://github.com/irenecj/ProyectoIdiomasIV/issues?q=is%3Aissue+is%3Aclosed) de issues cerrados.
- [Listado](https://github.com/irenecj/ProyectoIdiomasIV/milestones) de milestones cubiertos y próximos a completar.

## :page_facing_up: HISTORIAS DE USUARIO
En este punto del proyecto sólo tengo dos historias de usuario, pero en próximas prácticas se pueden añadir más issues de este tipo.
- [HU1.](https://github.com/irenecj/ProyectoIdiomasIV/issues/6) Consultar listado de vocabulario.
  * Como usuario debo poder consultar todo el listado de vocabulario junto con su traducción y significado. El formato que se mostrará será la palabra aprendida y al lado su traducción y significado.
- [HU2.](https://github.com/irenecj/ProyectoIdiomasIV/issues/7) Añadir vocabulario.
  * Como usuario debo poder añadir aquellas palabras nuevas que estoy aprendiendo junto con su traducción y significado.
- [HU3.](https://github.com/irenecj/ProyectoIdiomasIV/issues/17) Consultar una palabra correcta.
  * Como usuario debo poder consultar una palabra concreta junto con su traducción y/o significado. El formato que se mostrará será la palabra buscada y al lado su traducción y/o significado.
- [HU4.](https://github.com/irenecj/ProyectoIdiomasIV/issues/18) Modificar la descripción de una palabra.
  * Como usuario debo poder modificar la descripción de una palabra concreta.
- [HU5.](https://github.com/irenecj/ProyectoIdiomasIV/issues/20) Mostrar palabras que comiencen por una determinada letra.
  * Como usuario debo poder indicar por que letra quiero que empiecen las palabras que se van a mostrar.
- [HU6.](https://github.com/irenecj/ProyectoIdiomasIV/issues/21) Añadir expresiones populares.
  * Como usuario debo poder añadir expresiones populares de dicho idioma junto con la explicación de qué quieren decir.
- [HU7.](https://github.com/irenecj/ProyectoIdiomasIV/issues/22) Mostrar expresiones populares.
  * Como usuario debo poder ver un listado de todas las expresiones populares que hay registradas.
- [HU8.](https://github.com/irenecj/ProyectoIdiomasIV/issues/25) Mostrar palabras ordenadas alfabéticamente.
  * Como usuario debo poder ver un listado de todas las palabras que hay registradas indicando si quiero que éstas se muestren en orden alfabético ascendente o descendente.


## :pencil2: AUTORA
Irene Cano Jerez
