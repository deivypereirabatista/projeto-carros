let listaCarros = [
    {
        "nome": "Fiat Pulse",
        "img": "img/fiat-pulse.jpg",
        "descricao": "Fiat Pulse completo, 1.6, 350 cavalos de potência"
    },
    {
        "nome": "Fiat Uno",
        "img": "img/fiat-uno.jpg",
        "descricao": "Fiat Uno sem ar, 1.0 aspirado, 270 cavalos de potência"
    },
    {
        "nome": "Gol 2015",
        "img": "img/gol2015.jpg",
        "descricao": "Gol 2015 completo, 1.6, 360 cavalos de potência"
    },
    {
        "nome": "Lamborghini",
        "img": "img/lamborghini.jpg",
        "descricao": "Lamborghini completo, 3.0, 950 cavalos de potência, rodas de liga leve"
    },
    {
        "nome": "Prisma",
        "img": "img/prisma.jpg",
        "descricao": "Prisma completo, 1.4, 350 cavalos de potência, direção elétrica"
    },
    {
        "nome": "Conversivel",
        "img": "img/conversivel azul.jpg",
        "descricao": "Conversivel completo, 3.0, 940 cavalos de potência, azul"
    }
]

/* Criar os cards automáticos */
listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
        <div class="md:col-4">
            <section class="card m-2">
                <img src="${carro.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${carro.nome}</h4>
                    <a href="#" class="btn-solid theme-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
            </section>
        </div>
    `
    console.log(posicao)
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;
    document.getElementById("zoomImg").showModal();
}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-sun" ></i>`;
    }
}