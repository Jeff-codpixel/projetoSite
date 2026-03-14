const produtos = [
    {
        id: 1,
        nome: "Macaquinho fitness",
        preco: 70.00,
        tamanho: "M",
        tipo: "top",
        imagem: "img/macaquinho.jpg"
    },
    {
        id: 2,
        nome: "Conjunto Legging",
        preco: 69.99,
        tamanho: "G",
        tipo: "legging",
        imagem: "img/legging.jpg"
    },
    {
        id: 3,
        nome: "Blusa Masculina",
        preco: 45.00,
        tamanho: "P",
        tipo: "Blusa",
        imagem: "img/blusa masc.jpg",
    }

];

function carregarProdutos(lista) {
    const area = document.getElementById("produtos");
    area.innerHTML = "";

    lista.forEach(item => {
        area.innerHTML += `
            <div class="card">
                <img src="${item.imagem}" alt="${item.nome}">
                <h3>${item.nome}</h3>
                <p>Tamanho: ${item.tamanho}</p>
                <p>R$ ${item.preco.toFixed(2)}</p>
                <a class="btn" href="https://wa.me/SEUNUMERO?text=Olá, tenho interesse no produto: ${item.nome}" target="_blank">Quero!</a>
            </div>
        `;
    });
}

carregarProdutos(produtos);

document.getElementById("filtro-tamanho").addEventListener("change", filtrar);
document.getElementById("filtro-tipo").addEventListener("change", filtrar);

function filtrar() {
    let tamanho = document.getElementById("filtro-tamanho").value;
    let tipo = document.getElementById("filtro-tipo").value;

    let resultado = produtos.filter(item => {
        return (tamanho === "" || item.tamanho === tamanho) &&
               (tipo === "" || item.tipo === tipo);
    });

    carregarProdutos(resultado);
}

document.getElementById("pesquisa").addEventListener("input", pesquisar);

function pesquisar() {
    const texto = document.getElementById("pesquisa").value.toLowerCase();

    const resultado = produtos.filter(item =>
        item.nome.toLowerCase().includes(texto)
    );

    carregarProdutos(resultado);
}
