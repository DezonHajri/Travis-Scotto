
for (const element of elementi) {
  let contenitore = document.getElementById("contenitore");
  contenitore.style.position = "relative"

  let elemento = document.createElement("div");
  elemento.style.borderStyle = "solid";
  elemento.style.width = "100px";
  elemento.style.height = "120px";
  elemento.style.textAlign = "center";
  elemento.style.position = "absolute";
  elemento.style.left = 100 * (element.xpos - 1) + "px";
  elemento.style.top = 120 * (element.ypos - 1) + "px";
  elemento.style.backgroundColor = "#" + element["cpk-hex"];

  let numeroAtomico = document.createElement("p");
  numeroAtomico.innerText = element.number;
  elemento.appendChild(numeroAtomico);
  numeroAtomico.style.textAlign = "left"

   
 


  let simbolo = document.createElement("a");
  simbolo.innerText = element.symbol;
  simbolo.href = element.source
  simbolo.style.fontSize = "25px"
  elemento.appendChild(simbolo);
  simbolo.style.fontWeight = "bold"
  simbolo.style.textDecoration = "none" 
  

  let nome = document.createElement("p");
  nome.innerText = element.name;
  elemento.appendChild(nome);

  contenitore.appendChild(elemento);
}
