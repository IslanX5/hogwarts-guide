function ativaLetra(elemento){
    const arrayTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTexto.forEach((letra, i) => {
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitar');
ativaLetra(titulo);

const titulo1 = document.querySelector('.titulo1');
ativaLetra(titulo1);


function janela1() {
    let linkImagem = document.querySelector('.janela1');
    
    linkImagem.addEventListener('click', (event) => {
        event.preventDefault();
        // console.log(linkImagem.className);
    })

}

janela1();