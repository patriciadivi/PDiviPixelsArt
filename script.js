//-----------------------------------------------------
//1- Adicione à página o título "Paleta de Cores".
let header = document.querySelector("header")
let tagH1 = document.createElement("h1")
// console.log(tagH1);
tagH1.id = "title"

let textTitle = document.createTextNode('Paleta de Cores') 

tagH1.appendChild(textTitle)
header.appendChild(tagH1)

//-----------------------------------------------------
//2 - Adicione à página uma paleta contendo quatro cores distintas.

// let tagSection = document.querySelector("section")
// tagSection.id = "color-palette"
// // console.log(tagSection);


