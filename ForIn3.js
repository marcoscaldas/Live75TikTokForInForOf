const funcionario = {
nome: "Marcia",
cargo: "Atendente",
idade: 29,
salario: 1800.00
};
for ( let prop in funcionario){

    if(typeof funcionario[prop] === "number"){
        console.log("A propriedade " +
             prop + " é do tipo e valor é: "
              + funcionario[prop]);
    }
}