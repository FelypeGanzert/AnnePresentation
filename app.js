// Adiciona as imagens
document.addEventListener('DOMContentLoaded', () => {
    const UIgaleria = document.querySelector('#galeria-fotos');
    let output;
    for (let i = 1; i <= 12; i++) {
        output = `
             <div class="img-container">
                 <img src="img/anne${i}.jpg">
             </div>
         `
        UIgaleria.innerHTML += output;
    }
})


// Evento pra colocar o efeito de movimento quando entrar na pagina
document.body.addEventListener('click', e => {

    if (e.target.tagName.toLowerCase() === 'a') {

        // Retira a classe move-effect da pagina atual
        let current = e.target.parentElement.parentElement;
        let currentH3 = current.querySelector('h3');
        currentH3.classList.remove('move-effect');
        let currentP = current.querySelector('p');
        currentP.classList.remove('move-effect');
        // Adiciona a classe move-effect na pagina de destino
        let destiny = e.target.getAttribute('href');
        destiny = document.querySelector(destiny);
        destiny.querySelector('h3').classList.add('move-effect');
        destiny.querySelector('p').classList.add('move-effect');
    }
});

// Evento pra aumentar  a imagem
document.querySelector('#fotos').addEventListener('click', e => {
    if (e.target.classList.contains("img-container")) {
        e.target.classList.toggle('big-img');
    } else if (e.target.parentElement.classList.contains("img-container")) {
        e.target.parentElement.classList.toggle('big-img');
    }
});
