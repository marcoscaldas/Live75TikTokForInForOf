const pedidos = [
    { cliente: "João",
      item: "Hambúrguer de Bacon",
      quantidade: 2},

    { cliente: "Maria",
    item: "Hambúrguer Vegano",
    quantidade: 1},

    { cliente: "Pedro",
        item: "Cheeseburguer",
        quantidade: 3}
]
for( let pedido of pedidos){

console.log("Cliente: " + pedido.cliente + 
            "  , Item: " + pedido.item +
            "  , Quantidade: " + pedido.quantidade);
}