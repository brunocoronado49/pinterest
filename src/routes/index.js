import { Router } from 'express';
import { upload } from '../controllers/middlewares.js';

const router = Router();

// Pagina de inicio
router.get('/', (req, res) => {
    res.render('index');
});

// perfil de una imagen
router.get('/image/:id', (req, res) => {
    res.send('image profile');
});

// mostrar el formulario para subir imagen
router.get('/upload', (req, res) => {
    res.render('upload');
});

// metodo para subir imagen
router.post('/upload', upload,(req, res) => {
    console.log(req.file);
    res.send('uploaded');
});

// eliminar una imagen
router.get('/delete/:id', (req, res) => {
    res.send('image deleted');
});

export default router;