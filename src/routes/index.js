import { Router } from 'express';
import path from 'path';
import pkg from 'fs-extra';
const { unlink } = pkg;
import { upload } from '../controllers/middlewares.js';
import Image from '../models/Image.js';

const router = Router();

// Pagina de inicio
router.get('/', async (req, res) => {
    const images = await Image.find();
    console.log(images);
    res.render('index', { images });
});

// perfil de una imagen
router.get('/image/:id', async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    console.log(image);
    res.render('profile', { image });
});

// mostrar el formulario para subir imagen
router.get('/upload', (req, res) => {
    res.render('upload');
});

// metodo para subir imagen
router.post('/upload', upload, async (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = "/img/uploads/" + req.file.filename;
    image.originalname = req.file.originalname;
    image.size = req.file.size;
    image.mimetype = req.file.mimetype;

    await image.save();

    console.log(image);
    res.redirect('/');
});

// eliminar una imagen
router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);
    await unlink(path.resolve('./src/public' + image.path));
    res.redirect('/');
});

export default router;