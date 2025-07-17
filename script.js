const nomes = [];

function adicionarNome() {
  const novoNome = prompt("Digite um nome para adicionar:");
  if (novoNome && novoNome.trim() !== "") {
    nomes.push(novoNome.trim());
    console.log("Nome adicionado!");
    console.log("Lista atualizada:", nomes);
  } else {
    console.log("Nome inválido.");
  }
}

function filtrarNomes() {
  const letra = prompt("Digite a letra inicial para filtrar os nomes:");
  if (!letra || letra.length !== 1) {
    console.log("Por favor, insira uma única letra.");
    return;
  }
  const letraMinuscula = letra.toLowerCase();
  const filtrados = nomes.filter(nome => nome.toLowerCase().startsWith(letraMinuscula));
  if (filtrados.length === 0) {
    console.log(`Nenhum nome começa com a letra "${letra}".`);
  } else {
    console.log(`Nomes que começam com "${letra}":`, filtrados);
  }
}

function buscarNome() {
  const nomeBusca = prompt("Digite o nome exato para buscar:");
  if (!nomeBusca) {
    console.log("Entrada inválida.");
    return;
  }
  const encontrado = nomes.find(nome => nome === nomeBusca);
  if (encontrado) {
    console.log(`Nome encontrado: ${encontrado}`);
  } else {
    console.log(`Nome "${nomeBusca}" não encontrado na lista.`);
  }
}

function transformarNomes() {
  const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
  console.log("Lista transformada para maiúsculas:", nomesMaiusculos);
}

function verificarNomes() {
  const todosMaisDeTres = nomes.every(nome => nome.length > 3);
  console.log("Todos os nomes têm mais de três caracteres?", todosMaisDeTres);
}

function menu() {
  let continuar = true;
  while (continuar) {
    const opcao = prompt(`Escolha uma operação:
1 - Adicionar nome
2 - Filtrar nomes por inicial
3 - Buscar nome exato
4 - Transformar nomes em maiúsculas
5 - Verificar se todos têm mais de 3 caracteres
6 - Sair`);

    switch (opcao) {
      case "1":
        adicionarNome();
        break;
      case "2":
        filtrarNomes();
        break;
      case "3":
        buscarNome();
        break;
      case "4":
        transformarNomes();
        break;
      case "5":
        verificarNomes();
        break;
      case "6":
        continuar = false;
        console.log("Programa encerrado.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

menu();
