# PASOS A SEGUIR PARA LLEVAR A CABO LA REALIZACIÓN DEL PROYECTO.

## HITO 0: USO BÁSICO DE HERRAMIENTAS.
En primer lugar debemos configurar git, obtener el par de claves pública y privada para hacer uso de SSH y subir el fichero de objetivos:
- Hacemos un fork del [repositorio de IV.](https://github.com/JJ/IV-20-21)
- Clonamos en nuestro local dicho repositorio.
- Configuramos git y nuestro perfil de GitHub.
- Aprendemos a usar git (sincronización hacia arriba y hacia abajo, pull request, push, uso de commits, entre otras).
- Modificamos el fichero de objetivos y hacemos un Pull Request.

A continuación tenemos que crearnos un repositorio donde desarrollaremos y documentaremos nuestro [proyecto:](https://github.com/irenecj/ProyectoIdiomasIV)
- Comprobar que tenemos los siguientes ficheros: README.md, .gitignore y LICENSE.
- Editar el README.md y describir el objetivo del proyecto, las herramientas que vamos a utilizar (en este hito sólo se especifica el lenguaje de programación) y los enlaces a la documentación.
- Añadir la documentación: para este hito creé un fichero que explica cómo he configurado git y cómo se crean las claves pública y privada, y otro fichero en el que expongo la justificación del lenguaje de programación que he elegido.

Una vez hecho esto, sincronizamos el repositorio con el remoto, modificamos el fichero [hito-0.md](https://github.com/JJ/IV-20-21/blob/master/proyectos/hito-0.md) y hacemos un Pull Request.

## HITO 1: ORGANIZACIÓN DE LOS GRUPOS DE PRÁCTICAS Y CREACIÓN DEL PROYECTO
Para este hito comenzamos familiarizándonos con el uso de *issues* y *milestones*, además, en mi caso, tuve que documentarme bastante sobre la mayoría de servicios que voy a utilizar en el proyecto ya que nunca he hecho nada similar a lo que se pide.

En primer lugar, creamos los milestones de los hitos 1, 2 y 3 y después comenzamos a crear por un lado issues relacionados con el hito 1, y por otro lado issues de historias de usuario. Muestro dichos issues:
- Añadir fichero iv.yaml.
- Detallar las herramientas que se van a utilizar.
- Añadir al menos 1 issue que corresponda a Historia de Usuario.
- Añadir estructura básica del código.
- Completar README.md
- HU1. Consultar listado de vocabulario.
- HU2. Añadir vocabulario.
- Correcciones en documentación y README.
- Añadir fichero con los pasos a seguir.

Una vez establecidos los issues simplemente es cuestión de comenzar a completarlos.
Para ello creamos un directorio **src** en el que tenemos la clase principal, en la que sólo hemos implementado el constructor y dos funciones, una para añadir vocabulario y otra para mostrar el vocabulario que hay añadido, la implementación de las diferentes funcionalidades junto con la ampliación de las dos que ya hemos implementado se llevará a cabo más adelante. Además, añadimos el fichero *iv.yaml*.

Modificamos de nuevo el README añadiéndole el por qué se ha elegido dicho proyecto y el resto de herramientas que vamos a utilizar, las cuales se han detallado en el fichero de herramientas ubicado en el directorio *docs*.

Finalmente, sincronizamos el repositorio con el remoto, modificamos el fichero [hito-1.md](https://github.com/JJ/IV-20-21/blob/master/proyectos/hito-1.md) y hacemos un Pull Request.

## HITO 2: TESTS UNITARIOS PARA LA CLASE DISEÑADA
Este hito se ha basado principalmente en aprender a testear nuestro código para asegurarnos de que éste funciona correctamente, por tanto hemos llevado a cabo una serie de tests unitarios y significativos para la clase implementada.

En mi caso, he ampliado la clase *idioma.js* dotándola de diversas funciones, las cuales he implementado basándome en las Historias de Usuario creadas, las cuales son:
- HU1. Consultar listado de vocabulario.
- HU2. Añadir vocabulario.
- HU3. Consultar una palabra concreta.
- HU4. Modificar la descripción de una palabra.
- HU5. Mostrar palabras que comiencen por una determinada letra.
- HU6. Añadir expresiones populares.
- HU7. Mostrar expresiones populares.
- HU8. Mostrar palabras ordenadas alfabéticamente.

Antes de nada, he implementado una clase llamada *traduccion.js* la cual sirve para crear objetos formados por una palabra y su significado. Dentro de esta clase tenemos métodos 'get' y 'set' para acceder y/o modificar los distintos atributos mencionados.

En la clase *idioma.js*, como ya he comentado, nos encontramos funciones cuyo propósito reside en las historias de usuario. Por tanto, tenemos un constructor al cual le debemos pasar un objeto de la clase *traduccion.js*, una función para poder añadir palabras nuevas y otra función para poder añadir expresiones populares.
Por otro lado, podemos mostrar toda la lista de palabras y su significado, al igual que podemos mostrar todas las expresiones populares.
Si el significado o la traducción de una palabra no nos queda clara o preferimos redactarla de otra manera, tenemos una función que nos permite modificarla sin problema.
También tenemos las opciones de consultar una palabra concreta, de consultar todas las palabras que empiecen por una letra determinada y de mostrar todo el listado de palabras ordenado alfabéticamente tanto ascendetente como descendentemente.

Además, hemos implementado una clase llamada *NoString* la cual hereda de la clase error y que lanza un error cuando el argumento introducido no es de tipo *string*.

Por último, aclarar que para realizar estos tests he usado **Grunt** como gestor de tareas.
Para su instalación simplemente debemos ejecutar los siguientes comando:
~~~
sudo npm install -g grunt-cli

sudo npm install grunt --save-dev #para tener la dependencia en el package.json

sudo npm install grunt-run --save-dev #para poder lanzar la tarea correspondiente a los tests
~~~
