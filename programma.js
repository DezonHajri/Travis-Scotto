

  let contenitore = document.getElementById("contenitore");

  contenitore.style.borderStyle = "solid";

  let elemento = document.createElement("div");
  elemento.style.borderStyle = "solid" 
  elemento.style.width = "70px"
  elemento.style.textAlign = "center"
  elemento.style.position = "absolute" 
  elemento.style.top = "500px"
  elemento.style.left = "500px"

  let numeroAtomico = document.createElement("p");
  numeroAtomico.innerText = 1;
  elemento.appendChild(numeroAtomico);

  let simbolo = document.createElement("a");
  simbolo.innerText = "H";
  simbolo.href = "https://it.wikipedia.org/wiki/Idrogeno"
  simbolo.style.fontSize = "25px"
  elemento.appendChild(simbolo);

  let nome = document.createElement("p");
  nome.innerText = "idrogeno";
  elemento.appendChild(nome);

  contenitore.appendChild(elemento);