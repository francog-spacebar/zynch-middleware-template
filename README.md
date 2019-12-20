**Environment Files**
Hay que crear archivos que contengan las variables de entorno necesarias
para tener las configuraciones correctas y poder realizar las conexiones
a servicios externos como bases de datos y APIs de terceros, como Noodoe.

En la carpeta server, crear una carpeta llamada `.env` y en ella crear los
archivos `test.config.env`, `development.config.env` y `production.config.env`
que contengan las siguientes variables. _En el archivo `production.config.env`,
la variable `PORT` debe ser tener el valor `80`_.

`.config.env` y `production.config.env`
que contengan las siguientes variables. _En el archivo `production.config.env`,
la variable `PORT` debe ser tener el valor `80`_.

```
IP=0.0.0.0
HOST=localhost
PORT=3001
CLIENT_HOST=localhost
CLIENT_PORT=3002
REDIS_URL=redis://redis:6379
SSL_KEY=[SSL_KEY_FILE_NAME]
SSL_CRT=[SSL_CRT_FILE_NAME]
DB_HOST=[MONGOLAB_DB_URL]
DB_USER=[MONGOLAB_DB_USERNAME]
DB_PASS=[MONGOLAB_DB_PASSWORD]
EMAIL_ADDRESS=[GMAIL_ADDRESS]
EMAIL_PASS=[GMAIL_PASSWORD]
NOODOE_API_URL=https://iusa-dev.server.noodoe.com/
```

En la carpeta `client`, crear dos archivos: `.env.development` y `.env.production`
con el siguiente contenido. De la misma manera, _en producción el puerto debe ser el `80`_.

```
HOST=0.0.0.0
PORT=3002
REACT_APP_HOST=localhost
REACT_APP_PORT=3001
SKIP_PREFLIGHT_CHECK=true
CHOKIDAR_USEPOLLING=true
```

**Highlights**

- [Docker](https://www.docker.com/) containers
- Using [HTTP/2](https://http2.github.io/)
- Folder by Feature structure
- Built-in React routing, [Redux](https://redux.js.org/)
- Built-in local authentication with [Passport](http://www.passportjs.org/)
- [EJS](https://ejs.co/) for rendering
- Handling database with [Mongoose](https://mongoosejs.com/)
- Email sending by [NodeMailer](https://nodemailer.com/about/)
- [Winston](https://github.com/winstonjs/winston) for logging
- Testing with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
- Clean code with [ESLint](https://eslint.org/), [JavaScript Standard Style](https://standardjs.com/)
- [Webpack](https://webpack.js.org/) built production server
- Using [PM2](http://pm2.keymetrics.io/) (cluster mode) for production
