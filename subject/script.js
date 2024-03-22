// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

window.addEventListener("load", () => {
    let bouttons = document.querySelectorAll("button");
    let ecran = document.querySelector(".calculator__display"); // Use querySelector instead of querySelectorAll to select the display element
    for (let boutton of bouttons) {
        boutton.addEventListener("click", (evenement) => {
            const boutton = evenement.target;
            console.log(boutton.textContent);
            if (ecran.textContent === "0") {
                // Replace the 0 on the display with the clicked button's text content
                ecran.textContent = boutton.textContent;
            }
            else if (ecran.textContent === "0" && boutton.textContent === ".") {
                // Append a 0 before the decimal point
                ecran.textContent += "0.";
            }
            else if (boutton.textContent === "AC") {
                // Clear the display
                ecran.textContent = "0";
            }
            else if (boutton.classList.contains("key--operator")) {
                l = stack.length;
                i = 0;
                result = 0;
                while (stack[i]!== "+" || stack[i]!== "-" || stack[i]!== "x" || stack[i]!== "/" || i<l){
                    result += stack.pop*Math.pow(10,i);
                    i++;
                }
                stack
                stack.push(boutton.textcontent)
                ecran.textContent = "0"
            }
            else if (boutton.textContent === "=") {
                // Calculate the result
                for (i = 0; i < stack.length; i++) {
                    if (stack[i] === "+") {
                        ecran.textContent = parseInt(stack[i - 1]) + parseInt(stack[i + 1]);
                    }
                    else if (stack[i] === "-") {
                        ecran.textContent = parseInt(stack[i - 1]) - parseInt(stack[i + 1]);
                    }
                    else if (stack[i] === "x") {
                        ecran.textContent = parseInt(stack[i - 1]) * parseInt(stack[i + 1]);
                    }
                    else if (stack[i] === "/") {
                        ecran.textContent = parseInt(stack[i - 1]) / parseInt(stack[i + 1]);
                    }
                }
            }
            else {
                // Append the clicked button's text content to the display
                ecran.textContent += boutton.textContent;
                addToStack(boutton.textContent);
            }
        });
    }
});

//stack pour faire des opérations:
//fonction pour ajouter les chiffres :
let stack = [];

function addToStack(value) {
    stack.push(value);
}



//créer une fonction pour calculer les opérations
//créer une fonction pour afficher le résultat
//créer une fonction pour effacer les données
//créer une fonction pour effacer le dernier caractère
//créer une fonction pour effacer tout
