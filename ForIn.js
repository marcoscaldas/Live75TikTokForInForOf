const pedido = {
    cliente: "João",
    item: "Hambúrguer de Bacon",
    quantidade: 2,
    pagamento: "Cartão de crédito"
};

for(let propriedade in  pedido  ) {
    console.log(` ${propriedade} :  ${pedido[propriedade]} `);
}

