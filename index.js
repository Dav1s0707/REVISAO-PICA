/*configurações do servidor - inicio
carregar o module express*/

const express = require("express");

// executar o modulo express
const app = express();

//definir pasta para os ejs
app.set("views", "./");

//criar uma instancia local
app.listen(3, () => {
  console.log("http://localhost:3/");
});

/*configurações do servidor - fim */

//configuração do banco de  dados - começo
//importar o mongoose
const mongoose = require("mongoose");

//configurar o script de conexao
const conexao = () => {
  mongoose.connect(
    "mongodb+srv://UserRev:admin@fiaptecnico.dakr2.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = conexao
//configuração do banco de  dados - fim

/*rota para a requisição / */
app.get("/", (req, res) => {
  conexao()
  //res.send('<marquee> Can GET /')
  res.render("index.ejs", {
    nome: "Rato",
    sobrenome: "Rataria",
    especialiedade: "amar",
  });
});
