import express from 'express';
import { jogo } from './routes/jogo.router.js';
import { instrumento } from './routes/intrumento.router.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './database/cloudinary.js';
import { AppDataSource } from './database/database.js';
import { autores } from './routes/autores.router.js';
import { livros } from './routes/livro.router.js';
import cors from 'cors';
import multer from 'multer';
import path from 'node:path';
const app = express();
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => ({
        folder: "artes",
        allowed_formats: ["jpg", "png", "jpeg"]
    })
});
const upload = multer({ storage });
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
}));
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
AppDataSource.initialize().then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY!");
    app.listen(777, () => { console.log('listening to port 777'); });
}).catch(error => {
    console.log(error);
});
app.use("/jogo", jogo);
app.use("/instrumento", instrumento);
app.use("/arte", upload.single("imagem"), autores);
app.use("/livros", livros);
//# sourceMappingURL=app.js.map