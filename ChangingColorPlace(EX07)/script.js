const colorBlock = document.getElementsByClassName("color_block");
const colorBlockLength = colorBlock.length;
const divColor = document.getElementById("div_color");
const divText = [
        '<div class="color_block" id="pale_violet_red"></div>',
        '<div class="color_block" id="light_yellow"></div>',
        '<div class="color_block" id="dark_salmon"></div>',
        '<div class="color_block" id="corn_flower_blue"></div>'
];
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const isSelected = [colorBlockLength];
let selected = 0;
let tempHTML = "";
let changedHTML = "";

//permet de mettre le tab divText dans la balise html divColor
for(let i = 0; i < divText.length; i++) {

    divColor.innerHTML += divText[i];
}

//ajoute un event sur les div precedement ajouté a html divColor, 
//et appele de la fonction, mis sous forme de fonction car réapelé plus tard
function addButton() {
    for(let i = 0; i < colorBlock.length; i++) {
        colorBlock[i].addEventListener("click", () => fn_select(i));
    }
}
addButton();

//permet de mettre une bordure et de definir l'indice true au clic d'une couleur
function fn_select(i) {
    for(let i = 0; i < colorBlock.length; i++) {
        colorBlock[i].style.border = "none";
    }
    for(let i = 0; i < colorBlock.length; i++) {
        isSelected[i] = false;
    }
    colorBlock[i].style.border = "3px solid white";
    isSelected[i] = true;
    console.log(i);

}

//creation de l'coute de clic sur bouton up et down
upButton.addEventListener("click", () => fn_up());
downButton.addEventListener("click", () => fn_down());

//fonction up appelé au clic sur upButton
//
function fn_up() {
    for(let i = 0; i < isSelected.length; i++) {
        if(isSelected[i] == true) {
            selected = i;
            if(selected > 0) {
                console.log(divText[selected]);
                console.log(divText);

                tempHTML = divText[selected-1];
                divText[selected-1] = divText[selected];
                divText[selected] = tempHTML;
                
                console.log(divText);
                changedHTML = "";
                for(let i = 0; i < divText.length; i++) {

                    changedHTML += divText[i];
                }
                divColor.innerHTML = changedHTML;
                for(let i = 0; i < colorBlock.length; i++) {
                    isSelected[i] = false;
                }
                fn_select(selected-1);
                addButton();
            }
        }
    }
}

function fn_down() {
    for(let i = 0; i < isSelected.length; i++) {
        if(isSelected[i] == true) {
            selected = i;
            i++;
            if(selected < 3) {
                console.log(divText[selected]);
                console.log(divText);

                tempHTML = divText[selected+1];
                divText[selected+1] = divText[selected];
                divText[selected] = tempHTML;

                console.log(divText);

                changedHTML = "";
                for(let i = 0; i < divText.length; i++) {

                    changedHTML += divText[i];
                }
                divColor.innerHTML = changedHTML;
                for(let i = 0; i < colorBlock.length; i++) {
                    isSelected[i] = false;
                }
                console.log(selected)
                console.log(selected+1)
                fn_select(selected+1);
                addButton();
            }
        }
    }
}