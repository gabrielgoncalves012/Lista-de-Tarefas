function reverseString(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

// Entrada da string
const string = prompt("Digite uma string para inverter: ");
console.log("String invertida:", reverseString(string));
