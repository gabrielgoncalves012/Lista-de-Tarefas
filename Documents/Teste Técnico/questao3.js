const faturamentoDiario = [10, 20, 0, 15, 35, 0, 40, 25, 0, 50];

const valores = faturamentoDiario.filter((x) => x > 0);


const menor = Math.min(...valores);
const maior = Math.max(...valores);


const soma = valores.reduce((acc, val) => acc + val, 0);
const media = soma / valores.length;


const diasAcimaMedia = valores.filter((x) => x > media).length;

console.log("Menor faturamento:", menor);
console.log("Maior faturamento:", maior);
console.log("Dias acima da média:", diasAcimaMedia);
