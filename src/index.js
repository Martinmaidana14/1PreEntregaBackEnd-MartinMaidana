
//Importaciones
import express from 'express'
import cartRouter from './router/cartRouter.js'
import productsRouter from './router/productsRouter.js'
import upload from './config/multer.js'
import { __dirname } from './path.js'

//Definisiones de Importaciones // Configuraciones o declaraciones
const app = express()
const PORT = 4000

//Permite poder ejecutar JSON // Middlewares
app.use(express.json())
app.use('/static', express.static(__dirname + '/public'))

//Routes
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)
app.post('/upload', upload.single('product'), (req, res) => {
    try {
        console.log(req.file)
        res.status(200).send("Imagen cargada correctamente")
    } catch (e) {
        res.status(500).send("Error al cargar imagen")
    }
})

//Servidor
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})
