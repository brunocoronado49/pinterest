import express from 'express';
import path from 'path';
import morgan from 'morgan';
import indexRoute from './routes/index.js';
import { __dirname } from './configDirname.js';

// Inicializaciones
const app = express();

// rutas
app.use(indexRoute);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// ajustes
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Crear el puerto
app.set('port', process.env.PORT || 3000);

// Instanciar el puerto
const port = app.get('port');

// Escuchar el server
app.listen(port, () => {
    console.log(`Sever on port: ${port}`);
});