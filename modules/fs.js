const fs = require("fs");
const path = require("path");

// Criar uma pasta
//fs.mkdir(path.join(__dirname, "/test"), (error) =>{
//    if(error){
//      return  console.log("Error: ", error)
//    }
//    console.log("Pasta criada com sucesso!")
//})

// Criar uma arquivo
fs.writeFile(path.join(__dirname, "/test", "test.txt"), "hello!", (error) => {
  if (error) {
    return console.log("Error: ", error);
  }
  console.log("Arquivo criado com sucesso");

  // Adicionar a um arquivo
  fs.appendFile(
    path.join(__dirname, "/test", "test.txt"),
    "Verção 2 aeee!",
    (error) => {
      if (error) {
        return console.log("Error: ", error);
      }
      console.log("Arquivo modificado com sucesso");
    }
  );

  // ler arquivo
  fs.readFile(
    path.join(__dirname, "/test", "/test.txt"),
    "utf-8",
    (error, data) => {
      if (error) {
        return console.log("Error: ", error);
      }
      console.log(data);
    }
  );
});
