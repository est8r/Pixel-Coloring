const paleta = document.querySelector("#paleta-cores");
const color = document.querySelectorAll(".color");
const pixelBoard = document.querySelector("#pixelBoard");

paleta.addEventListener("click", (e) => {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove("selected");
  }
  if (e.target.classList.contains("color")) {
    e.target.classList.add("selected");
  }
}); //ao clicar, o for analisará cada uma das cores para ver qual delas está selecionada e logo depois retirar o atributo 'selected'. O if ira colocar o 'selected' na cor clicada pelo usuario sob a condição expressa

pixelBoard.addEventListener("click", (e) => {
  if (e.target.classList.contains("pixel")) {
    const selected = document.querySelector(".selected");
    const selectedColor = getComputedStyle(selected).backgroundColor;
    const pixel = e.target;
    pixel.style.backgroundColor = selectedColor;
  }
}); //depois de fazermos o selected variar entre as cores, vamos fazer com que o evento de click analise se estamos clicando em um dos pixels no html, pegue a estilização background color da cor selecionada e aplique nesse pixel através do if sob uma condição (a de ser um pixel)

const clear = document.querySelector("#clearAll");
clear.addEventListener("click", () => {
  const pixel = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = "white";
  }
}); //este addEventListener configura o botão 'Limpar tudo' para limpar todos os pixels preenchidos, selecionando todos os elementos com a class 'pixel' e definindo a sua estilização background color, posteriormente alterada para uma das cores da paleta, para sua cor padrão, a branca.

function size(input) {
  pixelBoard.innerHTML = "";
  for (let i = 0; i < input; i += 1) {
    const line = document.createElement("div");
    line.className = "line";
    for (let x = 0; x < input; x += 1) {
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
} // aqui criamos uma função que trata do tamanho do board de acordo com o numero selecionado pelo usuario no input de tipo number. No primeiro for estamos declarando que o i é 0 e enquanto for menor que o numero escolhido no input, vai ser adicionado mais uma div de className 'line' logo abaixo das ja existentes. No segundo for, fazemos o mesmo, mas agora com os pixels dentro das divs line criadas, enquanto o X for menor que o numero estabelecido, sera adicionado uma nova div de className 'pixel' dentro da div line, como as ja existentes. Por fim com o append, adicionamos essa alterações em seus devidos lugares.
