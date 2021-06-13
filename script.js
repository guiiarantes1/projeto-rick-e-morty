const NumeroMaximoPersonagens = 671;

const gerarPersonagemAleatorio = () => {
    return Math.floor(Math.random() * NumeroMaximoPersonagens);
}

const buscarPersonagem = (id) => {
    const personagem = gerarPersonagemAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${personagem}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        const tagImg = document.getElementById("imagem" + id);
        const tagNome = document.getElementById("nome-personagem" + id);

        tagImg.src = data.image;
        tagImg.alt = 'Imagem do personagem: ' + data.name;

        tagNome.textContent = data.name;
    })
}


const buscarPersonagens = () => {
    const idPersonagens = [1, 2, 3, 4];
    idPersonagens.forEach(id => buscarPersonagem(id));
}

window.onload = buscarPersonagens;
