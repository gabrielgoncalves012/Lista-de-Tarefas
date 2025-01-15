function isFibonacci(num) {
    let sequence = [0, 1];
    while (sequence[sequence.length - 1] < num) {
        const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextValue);
    }

    console.log("Sequência gerada:", sequence);
    if (sequence.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }
}

// Entrada do número
const num = parseInt(prompt("Informe um número para verificar: "), 10);
isFibonacci(num);
