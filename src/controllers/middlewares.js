import multer from 'multer'
import path from 'path';
import { __dirname } from '../configDirname.js';
import { v4 as uuid } from 'uuid';

const storage = multer.diskStorage({
    destination: path.join(__dirname, './public/img/uploads'),
    filename: (req, file, cb) => {

    }
});

export const upload = multer({
    dest: path.join(__dirname, './public/img/uploads'),
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: (req, file, cb) => {},
}).single('image');