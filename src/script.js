// Função para registrar um usuário no banco de dados
function registrarUsuario(event) {

  // Evitar que o formulário seja enviado
  event.preventDefault();

  // Pegar os valores dos inputs
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var cidade = document.getElementById("cidade").value;

  // Debugando os valores
  console.log(nome, sobrenome, cidade);

  // Importando o módulo mysql2
  var mysql = require("mysql2");

  // Configuração para acessar o banco de dados
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "electron-teste",
  });

  // Verificar se houve erro ao conectar
  connection.connect(function(error) {
    if (error) {
      console.log(error.code);
      console.log(error.fatal);
    }
  })


  // Query para inserir um usuário no banco de dados
  var query = `INSERT INTO pessoa (nome, sobrenome, cidade) VALUES ("${nome}", "${sobrenome}", "${cidade}")`;


  // Executar a query
  connection.query(query, function(error) {
    if(error) {
      console.log("Ocorreu um erro ao inserir no banco de dados")
    } else {
      alert("Usuário cadastrado com sucesso")
    }
  })
}

// Adicionar evento de submit no formulário
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", registrarUsuario);














// var mysql = require('mysql2');

// var formulario = document.getElementById('formulario');

// formulario.addEventListener('submit', function(e){
//   e.preventDefault();

//   var nome = document.getElementById('nome').value;
//   var sobrenome = document.getElementById('sobrenome').value;
//   var cidade = document.getElementById('cidade').value;

//   if (nome == '' || sobrenome == '' || cidade == '') {
//     console.log('city or name is empty', cidade, nome)
//     return
//   }

//   // Add the credentials to access your database
//   var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "electron-teste"
//   });

//   // connect to mysql
//   connection.connect(function (err) {
//     // in case of error
//     if (err) {
//       console.log(err.code);
//       console.log(err.fatal);
//     }
//   });

//   $query = 'INSERT INTO user_profiles(display_name, city) VALUES ("' + name + '", "' + cidade + '");';

//   connection.query($query, function (err, rows, fields) {
//     if (err) {
//       console.log("An error occurred performing the query.");
//       console.log(err);
//       return;
//     }

//     alert('usuario adicionado com sucesso')

//     console.log("Query successfully executed");
//   });

// })
