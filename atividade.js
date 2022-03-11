const Listadepecas = ['peca de teste', 'AB', 'peca B'];
console.log('quantidade de caracteres')

if (Listadepecas.length <= 10) {
console.log('as peças pode ser cadastradas');
}
for (let index = 0; index < Listadepecas.length; index++) {
    const pecaatual = Listadepecas[index];
    if (pecaatual.length < 3) {
        console.log(pecaatual + ': a peça possui nome inferior a 3 caracteres e nãopode ser cadastrada')
    } else
     console.log(pecaatual + ': a peça pode ser cadastrada') 
}
console.log('peso da peça')
const pesodapecaemgramas = 50;
if (pesodapecaemgramas >= 100) {

console.log('peso sufuciente')
 } else
console.log('valor insufuciente')
