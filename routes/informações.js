import express from "express"
import { cadastroEmpresa } from "../controller/informaçõesControler.js"
import {empresas, empresaspequenas, sites,} from "../dados.js"
const informacoesRouter = express.Router()


informacoesRouter.get("/empresas-pequenas", (req,res)=>{
    res.json(empresaspequenas)
})

informacoesRouter.get("/empresas", (req,res)=>{
    res.json(empresas)
})

informacoesRouter.get("/sites-relevantes", (req,res)=>{
    res.json(sites)
})


informacoesRouter.post("/cadastro-empresa", (req,res)=>{
   const {nome, descrição, endereço, ceo, objetivo, faturamentoAnual, metas} = req.body
   const novaEmpresa = cadastroEmpresa(nome, descrição, endereço, ceo, objetivo, faturamentoAnual, metas)
   res.json({novaEmpresa})
})



export {informacoesRouter}
