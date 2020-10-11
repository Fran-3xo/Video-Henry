<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Henry-App-Videos

## Tecnologias Usadas

- Front-End:
+ React
+ Redux
+ React-MaterialUi
+ HTML, CSS, javascript

- Back-End:
+ Node.js
+ Express
+ Sequelize
+ passport
+ SQL 

- Base de datos:
+ PostgreSQL

## Como iniciar el proyecto
Para iniciar el proyecto deberas:

- Clonar el repositorio
- Crear un archivo `.env ` dentro de la carpeta `api`, el archivo debe contener lo siguiente:

```
DB_USER={Your postgreSQL user}
DB_PASSWORD={Your postgreSQL password}
DB_HOST=localhost
GH_ID={client_id github}
GH_SECRET={client_secret github}
GH_URL_CB={url callback para autencitacion satisfactoria de github}
CLIENT_URL={url del servidor de front-end}
USER_ADMIN={usuario de github para administrar la app}
DEVELOPMENT={estado del proyector (en desarrollo -> true)}
```
- Crear un archivo `.env ` dentro de la carpeta `client`, el archivo debe contener lo siguiente:

```
REACT_APP_API_URL={url del servidor de la api}

```
Para agregar a un video, deberas ir a la seccion `Admin` luego hacer click en `Clases`, alli podras agregar un video utilizando su `url` ex: `https://vimeo.com/{video_id}`.
Para agregar a un usuario, deberas ir a la seccion `Admin` luego hacer click en `Usuarios`, alli podras agregar un usuario utilizando su `username` de github.
