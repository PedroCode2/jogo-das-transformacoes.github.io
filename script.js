const elementoNome = document.getElementById("personagem");
const elementoSituacao = document.querySelector("#forma");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#Mudar");

elementoBtn.addEventListener("click", () =>{
    if(elementoBtn.value == "primeiro"){
        elementoImg.src = "./img/Ichigo-Shinigami.png";
        elementoNome.innerText = "Ichigo Shinigami";
        elementoSituacao.innerText = "Shinigami";
        elementoBtn.value = "segundo";
    } else if(elementoBtn.value == "segundo") {
        elementoImg.src = "./img/Ichigo-Bankai-Inicial.png";
        elementoNome.innerText = "Ichigo Bankai";
        elementoSituacao.innerText = "Bankai Inicial";
        elementoBtn.value = "terceiro";
    } else if(elementoBtn.value == "terceiro") {
        elementoImg.src = "./img/Ichigo-Vizard-Bankai.jpg";
        elementoNome.innerText = "Ichigo Vizard";
        elementoSituacao.innerText = "Vizard Bankai";
        elementoBtn.value = "quarto";
    }else if(elementoBtn.value === "quarto"){
        elementoImg.src = "./img/Ichigo-VastoLord.png";
        elementoNome.innerText = "Ichigo VastoLorde";
        elementoSituacao.innerText = "Vasto Lorde";
        elementoBtn.value = "quinto";
    }else if(elementoBtn.value === "quinto"){
        elementoImg.src = "./img/Ichigo-Bankai-Final.png";
        elementoNome.innerText = "Ichigo Bankai";
        elementoSituacao.innerText = "Bankai Final";
        elementoBtn.value = "sexta";
    }else if(elementoBtn.value === "sexta"){
        elementoImg.src = "./img/Ichigo-Mugetsu.png";
        elementoNome.innerText = "Ichigo Final";
        elementoSituacao.innerText = "Mugetsu";
        elementoBtn.value = "setima";
    }else {
        elementoImg.src = "./img/Ichigo-Estudante.png";
        elementoNome.innerText = "Ichigo";
        elementoSituacao.innerText = "Humano";
        elementoBtn.value = "primeiro";
    }
})