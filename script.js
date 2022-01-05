// VARIAVEIS GLOBAIS
const paletteColors = document.querySelector("#color-palette")
const pixelBoard = document.querySelector("#pixel-board");

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
//2 - Adicione à página uma paleta contendo quatro cores distintas. | FEITO NO HTML |

//3 - Adicione a cor preta como a primeira cor da paleta de cores.  | FEITO NO HTML |

//-----------------------------------------------------
// 4 - Adicione à página um quadro de pixels, com 25 pixels.

function pixelBoardCreateLines(heigth, width) {
    for (let positionNow = 1; positionNow <= heigth; positionNow += 1) {
        const tagSection = document.createElement("section");
        tagSection.id = "pixel-board-line-" + positionNow;

        for (let elementNow = 1; elementNow <= width; elementNow += 1) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.backgroundColor = "white";

            tagSection.appendChild(pixel);
        }

        pixelBoard.appendChild(tagSection);
    }
}

// 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
function chooseColor(event){
    // console.log("ENTREI");
    let element = event.target
    let classSelected = document.querySelector(".selected")

    if (element !== classSelected) {
        classSelected.classList.remove("selected")
        element.classList.add("selected")
    }
}

pixelBoardCreateLines(5, 5);
paletteColors.addEventListener("click", chooseColor)