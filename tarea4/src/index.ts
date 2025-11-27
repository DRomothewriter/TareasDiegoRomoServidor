import dotenv from 'dotenv';
dotenv.config();
import express, { static as static_ } from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import appRoutes from './app/routes';

const app = express();

app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', static_(path.join(__dirname, '..', 'public')));

app.use('/', appRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});