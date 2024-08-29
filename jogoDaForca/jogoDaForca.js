
import { getWord, getWordM, getWordD } from "./palavra.js";

const contentBtns = document.querySelector(".btns");
const contentpalavraMisteriosa = document.querySelector(".palavraMisteriosa");
const img = document.querySelector("#img");
const contentDica = document.querySelector(".dica");
const btnFacil = document.querySelector(".facil");
const btnMedio = document.querySelector(".medio");
const btnDificil = document.querySelector(".dificil");

// Sotea palavra facil

btnFacil.onclick = () => inic();
let indexImg;
let palavra;  

inic();

function inic() {
  indexImg = 1;
  img.src = `img1.png`;

  gerarpalavra();
  gerarBtns();
  document.addEventListener('keydown', handleKeyPress);
}

function gerarpalavra() {
  contentpalavraMisteriosa.textContent = "";

  const { word, clue } = getWord();
  palavra = word.toUpperCase();
  const palavraContemAcento = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(palavraContemAcento).forEach((letra) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letra.toUpperCase());
    contentpalavraMisteriosa.appendChild(span);
  });

  contentDica.textContent = `Dica: ${clue}`;
}
      

// sortea palavra media

btnMedio.onclick = () => Med();

function Med() {
  indexImg = 1;
  img.src = `img1.png`;

  gerarpalavraMed();
  gerarBtns();
  document.addEventListener('keydown', handleKeyPress);
}

function gerarpalavraMed() {
  contentpalavraMisteriosa.textContent = "";

  const { word, clue } = getWordM();
  palavra = word.toUpperCase();
  const palavraContemAcento = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(palavraContemAcento).forEach((letra) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letra.toUpperCase());
    contentpalavraMisteriosa.appendChild(span);
  });

  contentDica.textContent = `Dica: ${clue}`;
}

// sortea palavra dificil

btnDificil.onclick = () => Dif();

function Dif() {
  indexImg = 1;
  img.src = `img1.png`;

  gerarpalavraDif();
  gerarBtns();
  document.addEventListener('keydown', handleKeyPress);
}

function gerarpalavraDif() {
  contentpalavraMisteriosa.textContent = "";

  const { word, clue } = getWordD();
  palavra = word.toUpperCase();
  const palavraContemAcento = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(palavraContemAcento).forEach((letra) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letra.toUpperCase());
    contentpalavraMisteriosa.appendChild(span);
  });

  contentDica.textContent = `Dica: ${clue}`;
}


function respostaErrada() {
  indexImg++;
  img.src = `img${indexImg}.png`;

  if (indexImg === 7) {
    setTimeout(() => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        color:"rgb(0, 9, 87)",
        text: "Você errou, tente novamente!",
        backdrop: `
        rgba(58, 125, 202, 0.658)
        url("macaco.gif")
        right bottom
        no-repeat `,
      });
      inic();
    }, 100);
  }
}

function verificaLetra(letra, btn) {
  const arr = document.querySelectorAll(`[word="${letra}"]`);

  if (!arr.length) {
    btn.style.backgroundColor = "#FF0000";
    btn.style.borderColor = "#FF0000";
 
    respostaErrada();
  } else {
    btn.style.backgroundColor = "#32CD32";
    btn.style.borderColor = "#006400";
   
    arr.forEach((e) => {
      e.textContent = letra;
    });
  }

  const spans = document.querySelectorAll(`.palavraMisteriosa span`);
  const vencer = !Array.from(spans).find((span) => span.textContent === "_");

  if (vencer) {
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Parabéns!!",
        text: "Você acertou, tente novamente!",
        width: 600,
        padding: "3em",
        color: "rgb(0, 9, 87)",
        backdrop: `
          rgba(58, 125, 202, 0.658)
          url("fogos.gif")
          top
`
      });
      inic();
    }, 100);
  }
}

function gerarBtns() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letra = String.fromCharCode(i).toUpperCase();
    btn.textContent = letra;
    btn.style.backgroundColor = "rgb(0, 9, 87)";
    btn.style.color = "white";
    btn.onclick = () => {
      btn.disabled = true;
      verificaLetra(letra, btn);
    };

    contentBtns.appendChild(btn);
  }
}

function handleKeyPress(event) {
  const key = event.key.toUpperCase();
  
  if (key.length === 1 && key >= 'A' && key <= 'Z') {
    const btn = Array.from(contentBtns.children).find(b => b.textContent === key);
    
    if (btn && !btn.disabled) {
      btn.disabled = true;
      verificaLetra(key, btn);
    }
  }
}

