# COMPLEMENTARIO2
Crear un Docker con una base de datos MongoDB y otro Docker que albergue los servicios REST del trabajo autónomo.

# Creación de imagen servicios REST
Se ejecutó docker build . -t restpara crear la imagen de los servicios rest del proyecto, la imagen fue creada con el nombre rest.

# Ejecución de la imagen creada y creación de contenedor
Se ejecutó docker run --name complementario2 -it -p 4000:5702 rest. Se crea un contenedor con nombre complementario2, se usa -it para ver el paso a paso de la ejecución, -p para indicar el puerto, 4000:5702 el primer puerto es el que se asignó para ejecutar dentro del contenedor y 5702 es el puerto establecido en las configuraciones del proyecto. Por último se establece el nombre de la imagen que se va ejecutar.

# Levantar docker-compuse
Se ejecutó docker-compose up --build para levantar los dockers definidos con service