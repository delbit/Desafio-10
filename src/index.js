import express from 'express';
import path from 'path';
import routerApi from './routes/api.js';
import handlebars from 'express-handlebars';
import { productos } from './routes/api.js';
import { objToJSON } from './module/app.js';

/** Configurando e Inicializando EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

/** Configurando Handlebars */
//Estableciendo los path de los views para Handlebars
const layoutDirPath = path.resolve(__dirname, '../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/index.hbs');
const partialDirPath = path.resolve(__dirname, '../views/partials');

//Configurando el engine con Handlerbars y los path personalizados
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

//Iniciando la carpeta public
const publicPath = path.resolve(__dirname, './../public');
app.use(express.static(publicPath));

// Módulos usados para aceptar el método post con JSON o urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * DEFINICION DE LOS ROUTERS
 */

app.use('/api', routerApi);

// Render de la pagina vista
app.get('/', (req, res) => {
  const data = { mostrarForm: true };
  res.render('main', data);
});

// Render de la pagina vista
app.get('/productos/vista', (req, res) => {
  const data = { mostrarList: true, productos };
  res.render('main', data);
});
