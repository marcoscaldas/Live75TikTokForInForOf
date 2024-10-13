const precos = [15.50, 22.00,
    18.75, 25.00 ];

let total = 0;

for( let preco of precos){
   total += preco;  
}
console.log('Valor total com FOR OF: R$ '
    + total.toFixed(2) );
///////////////////////////////////////////////
const precos2 = [15.50, 22.00,
    18.75, 25.00 ];

const total2 =
 precos2.reduce( 
      ( acumulador, precoAtual) => 
        acumulador + precoAtual, 0
    )

console.log('Valor total com REDUCE: R$ '
     + total2.toFixed(2) );