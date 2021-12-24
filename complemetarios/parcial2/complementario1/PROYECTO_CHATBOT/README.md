# COMPLEMENTARIO1
# Crear un Docker, y en este agregar el # trabajo autónomo desarrollado en el primer parcial 

# CREACION DE IMAGEN 
# Se ejecutó docker build . -t admin para crear la imagen del proyecto con todo lo que está en la carpeta Proyecto_chatbot, la imagen fue creada con el nombre admin.

# EJECUCION DE LA IMAGEN CREADA
# Se ejecutó docker run -it -p 5702:5702 admin. Se usa -it para ver el paso a paso de la ejecución, -p para indicar el puerto, 5702: 5702 el primer puerto es el que se asignó para ejecutar dentro del contenedor y 5702 es el puerto establecido en las configuraciones del proyecto. Por último se establece el nombre de la imagen que se va ejecutar.

