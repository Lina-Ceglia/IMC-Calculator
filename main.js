let sexe
let age
let height
let weight
let result

let computeImc = () => {
    /* on doit obtenir le résultat de l'Imc de la personne*/

    height = document.getElementById('height').value
    weight = document.getElementById('weight').value
    resultElement = document.getElementById('result')

    let imc = (weight / ((height * height) / 10000));
    console.log(imc)

    // Cela permet de ne pas afficher le NaN

    if (isNaN(imc)) {
        resultElement.innerHTML = 'Aucun résultat'
    } else {
        resultElement.innerHTML = imc.toFixed(2);
    }
    result = imc;
    changeMessageImc()


}

let changeMessageImc = () => {
    /*Il faut que cela affiche le message de conseil en rapport à Imc */

    let messageElement = document.getElementById('message')
    if (result < 18.5) {
        message = 'Attention, vous êtes en sous poids';
        changeColor('rgb(239,71,111)');
    } else if (result >= 18.5 && result <= 25) {
        message = 'Vous êtes en pleine forme !'
        changeColor('rgb(6,214,160)');
    } else if (result > 25) {
        message = 'Attention, vous êtes en surpoids';
        changeColor('rgb(239,71,111)');
    } else {
        message = "Une erreur s'est produite (pas de données ou autre)"
    }

    console.log(message)
    messageElement.innerHTML = message;

    document.getElementById('message-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'block';
   

}

let changeColor = (color) => {
    document.body.style.background = color;
}