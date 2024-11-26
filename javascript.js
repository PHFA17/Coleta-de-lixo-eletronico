var varpagina = 1;
const numpaginas = 4;

document.addEventListener("DOMContentLoaded", function() {
    
    const avancar = document.getElementById("avancar");
    const retroceder = document.getElementById("retroceder");
    const imagens = document.querySelectorAll(".divimagens");
    
    const showImage = (varpagina) => {
        imagens.forEach(imag => {
            imag.classList.add("clear");
        });
        
        document.getElementById("pagina").innerHTML = `<p>${varpagina.toString() + "/" + numpaginas.toString()}</p>`;
        imagens[varpagina - 1].classList.remove("clear");
        
        const currentimg = document.querySelectorAll(".imagens")[varpagina - 1];
        const imgwidth = currentimg.clientWidth;
        console.log(imgwidth);
        
        const removeTransitionTemporarily = (element) => {
            const originalTransition = element.style.transition;
            element.style.transition = 'none';
            setTimeout(() => {
                element.style.transition = originalTransition;
            }, 0);
        };
        
        const info = document.querySelectorAll(".info");
        const currentinfo = info[varpagina - 1]; // Alinhando varpagina com o índice correto de info
        const infoheight = currentinfo.clientHeight;
        console.log("infoheight: " + infoheight);
        
        info.forEach(informacao => {
            informacao.style.width = imgwidth + 1 + "px";
            removeTransitionTemporarily(informacao);
            
            informacao.removeEventListener("mouseover", mouseOverHandler);
            informacao.removeEventListener("mouseout", mouseOutHandler);
            
            informacao.addEventListener("mouseover", mouseOverHandler);
            informacao.addEventListener("mouseout", mouseOutHandler);
        });
        
        function mouseOverHandler(event) {
            const informacao = event.currentTarget;
            const infoheight = informacao.clientHeight;
            informacao.classList.add("hover");
            informacao.style.bottom = infoheight + "px";
        }
        
        function mouseOutHandler(event) {
            const informacao = event.currentTarget;
            informacao.classList.remove("hover");
            informacao.style.bottom = 74 + "px";
        }
        
    };
    
    showImage(varpagina);
    
    avancar.addEventListener("click", () => {
        varpagina = (varpagina < numpaginas) ? varpagina + 1 : 1;
        showImage(varpagina);
        console.log(varpagina + " varpagina");
    });
    
    retroceder.addEventListener("click", () => {
        varpagina = (varpagina === 1) ? numpaginas : varpagina - 1;
        showImage(varpagina);
        console.log(varpagina + " varpagina");
    });

    const nomes = [
        "Pedro Henrique Fabiano de Almeida",
    ];
    
    // Índice inicial
    let indiceAtual = 0;
    
    // Função para atualizar o nome
    function atualizarNome() {
        // Atualiza o conteúdo do elemento com o nome atual
        document.querySelector("#nomes").innerHTML = nomes[indiceAtual];
        
        // Incrementa o índice, ou reseta para 0 se atingir o fim do array
        indiceAtual = (indiceAtual + 1) % nomes.length;
    }
    
    // Chama a função a cada 3 segundos (3000 milissegundos)
    setInterval(atualizarNome, 3000);
    
});



