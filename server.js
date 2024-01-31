import express from "express"
import {informacoesRouter} from "../src/routes/informações.js"
const app = express()
const port = 4000

app.use(express.json())
app.use(informacoesRouter)

app.listen(port,()=>{
    console.log(`servidor ativo na porta ${port}`)
})
