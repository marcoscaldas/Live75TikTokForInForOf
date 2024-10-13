const precos = [15.50, 22.00,
     18.75, 25.00 ];
let total = 0;

for( let preco of precos){
    total += preco;  
}
console.log('Valor total: R$ '
     + total.toFixed(2) );
