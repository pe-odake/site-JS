const wordsM = [
  { word: "abacaxi", clue: "Fruta tropical" },
  { word: "elefante", clue: "Animal de grande porte com tromba longa" },
  { word: "computador", clue: "Dispositivo eletrônico" },
  { word: "girafa", clue: "Animal alto, com pescoço longo" },
  { word: "chocolate", clue: "Doce feito de cacau" },
  { word: "piano", clue: "Instrumento musical com teclas" },
  { word: "tigre", clue: "Felino selvagem" },
  { word: "esmeralda", clue: "Tipo de pedra preciosa" },
  { word: "navio", clue: "Embarcação no mar" },
  { word: "telefone", clue: "Dispositivo de comunicação" },
  { word: "floresta", clue: "Área com muitas árvores" },
  { word: "quadrado", clue: "Figura geométrica de quatro lados" },
  { word: "foguete", clue: "Veículo espacial" },
  { word: "sorvete", clue: "Doce gelado" },
  { word: "bicicleta", clue: "Veículo de duas rodas" },
  { word: "avião", clue: "Meio de transporte aéreo" },
  { word: "macaco", clue: "Primate arbóreo" },
  { word: "raios", clue: "Descargas elétricas na atmosfera" },
  { word: "montanha", clue: "Elevação natural da terra" },
  { word: "vela", clue: "Objeto para iluminação" },
];

const wordsF = [{ word: "rio", clue: "Corpo de água que corre para o mar" },
{ word: "montanha", clue: "Elevação alta de terra" },
{ word: "livro", clue: "Objeto que contém páginas com textos" },
{ word: "sol", clue: "Estrela que ilumina o dia" },
{ word: "cachorro", clue: "Animal de estimação que late" },
{ word: "casa", clue: "Lugar onde as pessoas moram" },
{ word: "carro", clue: "Veículo com quatro rodas" },
{ word: "janela", clue: "Abertura na parede para ver fora" },
{ word: "flor", clue: "Parte colorida de uma planta" },
{ word: "praia", clue: "Área de areia perto do mar" },]

const wordsD = [{ word: "constelação", clue: "Grupo de estrelas formando uma figura no céu" },
  { word: "paradoxo", clue: "Afirmação que parece contraditória, mas pode ser verdadeira" },
  { word: "eclipse", clue: "Quando um corpo celeste bloqueia a luz de outro" },
  { word: "inércia", clue: "Tendência de um objeto de permanecer em movimento ou em repouso" },
  { word: "osmose", clue: "Passagem de líquido através de uma membrana" },
  { word: "fractal", clue: "Forma geométrica complexa que se repete em escalas menores" },
  { word: "cratera", clue: "Depressão circular causada por impacto ou explosão" },
  { word: "simetria", clue: "Equilíbrio proporcional entre as partes de um objeto" },
  { word: "metamorfose", clue: "Transformação de forma ou estrutura" },
  { word: "equilíbrio", clue: "Estado de estabilidade entre forças opostas" },]


export function getWord() {
  const index = Math.floor(Math.random() * wordsF.length);
  return wordsF[index];

}
export function getWordM() {
  const index = Math.floor(Math.random() * wordsM.length);
  return wordsM[index];

}
export function getWordD() {
  const index = Math.floor(Math.random() * wordsD.length);
  return wordsD[index];

}