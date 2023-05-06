//IMPORTAMOS EXPRESS
import express from "express";

//Importamos Morgan desde express
import morgan from "morgan";

//Importamos Rutas
// import aprendizRouter from './routes/aprendizRouter.js'
import comentarioRoutes from "./routes/comentariosRouter.js";

const app = express();
//Middlewares, esto para que el servidor interprete los datos en formato json
app.use(morgan('dev'));
app.use(express.json());
//Usamos la ruta aprendiz
// app.use('/api', aprendizRouter);
//Ruta comentarios
app.use("/", comentarioRoutes);
export default app;