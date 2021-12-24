# se estalece el uso de node 
FROM node

# especificamos dOnde estarA el directorio de trabajo
WORKDIR /var/www

# copiamos en el directorio de trabajo las dependendias que necesita la aplicaciOn para funcionar
# package* copia todo los archivos que empiecen en package y terminen con la extensiOn .json
COPY package*.json ./

# ejecuciOn de run para instalar los archivs necesarios
RUN npm install

# se copia todo lo que estA dentro de src en la carpeta de trabajo
COPY . . 

EXPOSE 5702

# lista de comandos node a ejecutar para que el proyecte funcione
ENTRYPOINT ["npm", "start"]
