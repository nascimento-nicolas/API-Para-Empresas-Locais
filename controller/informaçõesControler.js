import { Empresa } from "../model/informaçõesModel.js";
import { empresas } from "../dados.js";


function cadastroEmpresa(nome, descrição, endereço, ceo, objetivo, faturamentoAnual, metas) {
    let novaEmpresa = new Empresa(nome, descrição, endereço, ceo, objetivo, faturamentoAnual, metas)
    empresas.push(novaEmpresa)
    return novaEmpresa 
    
}

export {cadastroEmpresa}