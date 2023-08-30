const express = require("express");
const routerApp = express.Router();

const appLogin = require("../apps/login/controller/ctlLogin");
const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appClientes = require("../apps/clientes/controller/ctlClientes");
const appPedidos = require("../apps/pedidos/controller/ctlPedidos");


// middleware that is specific to this router
routerApp.use((req, res, next) => {
next();
});

routerApp.get("/", (req, res) => {
res.send("Olá mundo!");
});

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);
//Rotas de Alunos
routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
routerApp.post("/getAlunoByID", appAlunos.getAlunoByID);
routerApp.post("/insertAlunos", appAlunos.insertAlunos);
routerApp.post("/updateAlunos", appAlunos.updateAlunos);
routerApp.post("/DeleteAlunos", appAlunos.DeleteAlunos);
//Rotas de Cursos
routerApp.get("/GetAllCursos", appCursos.GetAllCursos);
routerApp.post("/GetCursoByID", appCursos.GetCursoByID);
routerApp.post("/InsertCursos", appCursos.InsertCursos);
routerApp.post("/UpdateCursos", appCursos.UpdateCursos);
routerApp.post("/DeleteCursos", appCursos.DeleteCursos);
//Rotas de Clientes
routerApp.get("/getAllClientes", appClientes.getAllClientes);
routerApp.post("/GetClientesByID", appClientes.GetClientesByID);
routerApp.post("/InsertClientes", appClientes.InsertClientes);
routerApp.post("/UpdateClientes", appClientes.UpdateClientes);
routerApp.post("/DeleteClientes", appClientes.DeleteClientes);
//Rotas de Pedidos
routerApp.get("/getAllPedidos", appPedidos.getAllPedidos);
routerApp.post("/getPedidosByID", appPedidos.getPedidosByID);
routerApp.post("/insertPedidos", appPedidos.insertPedidos);
routerApp.post("/updatePedidos", appPedidos.updatePedidos);
routerApp.post("/DeletePedidos", appPedidos.DeletePedidos);



module.exports = routerApp;