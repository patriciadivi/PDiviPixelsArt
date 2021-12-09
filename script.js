//-----------------------------------------------------
// Adicione à página o título "Paleta de Cores".
let body = document.querySelector('body')
let tagH1 = document.createElement('h1')
console.log(tagH1);
tagH1.id = "title"

let textTitle = document.createTextNode('Paleta de Cores') 

tagH1.appendChild(textTitle)
body.appendChild(tagH1)

//-----------------------------------------------------
// Adicione à página uma paleta contendo quatro cores distintas.