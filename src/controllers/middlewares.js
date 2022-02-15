import multer from 'multer'
import path from 'path';
import { __dirname } from '../configDirname.js';
import { v4 as uuid } from 'uuid';

const storage = multer.diskStorage({
    destination: path.join(__dirname, './public/img/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
    }
});

export const upload = multer({
    dest: path.join(__dirname, './public/img/uploads'),
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if(mimetype && extname) {
            return cb(null, true);
        }

        cb("Error al subir la imagen");
    },
}).single('image');