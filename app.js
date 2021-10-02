const instrumento = require ("./database");

console.log (instrumento);

// Fazer o input

const readline = require ("readline-sync");

const entradaInicial = readline.question("Deseja procurar algum instrumento? S/N")

// Se for sim, mostrar as categorias.
if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis: ")
    console.log (("Baterias", "Guitarras", "Baixos", "Saxofones", "Percussão", "Flautas", "Harpas"));

    const entradaCategoria = readline.question("Qual categoria você escolhe?")

    const retorno = instrumento.filter(instrumento => instrumento.categoria === entradaCategoria);

    console.table(retorno);
} else { // Se for não, mostrar todos os livros em ordem crescente.
    const instrumentoordenado = instrumento.sort((a,b) => a.qtdEstoque - b.qtdEstoque);
    console.log ("Essas são todos os instrumentos disponíveis: ")
    console.table (instrumentoordenado);
}


