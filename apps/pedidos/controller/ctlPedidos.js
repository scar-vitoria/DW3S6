const mdlAlunos = require("../model/mdlPedidos");

const getAllPedidos = (req, res) =>
  (async () => {
    let registro = await mdlPedidos.getAllPedidos();
    res.json({ status: "ok", "registro": registro });
  })();

const getPedidosByID = (req, res) =>
  (async () => {
    const alunoID = parseInt(req.body.alunoid);
    let registro = await mdlAlunos.getAlunoByID(alunoID);

    res.json({ status: "ok", "registro": registro });
  })();

  const insertPedidos = (request, res) =>
  (async () => {
    //@ Atenção: aqui já começamos a utilizar a variável msg para retornar erros de banco de dados.
    const alunoREG = request.body;    
    let { msg, linhasAfetadas } = await mdlAlunos.insertAlunos(alunoREG);    
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

const UpdatePedidos = (request, res) =>
  (async () => {
    const alunoREG = request.body;
    let  { msg, linhasAfetadas } = await mdlAlunos.UpdateAlunos(alunoREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  const DeletePedidos = (request, res) =>
  (async () => {
    const alunoREG = request.body;
    let { msg, linhasAfetadas } = await mdlAlunos.DeleteAlunos(alunoREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  module.exports = {
    getAllPedidos,
    getPedidosByID,
    insertPedidos,
    UpdatePedidos,
    DeletePedidos,
};