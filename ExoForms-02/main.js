let f = document.myForm;

// Auto complétion du formulaire

function autocomplete(event) {
    event.preventDefault();
    clearForm();
    f.nom.value = "Dupont";
    f.prenom.value = "Jean";
    f.zipcode.value = "1234";
}
document.getElementById("completion").onclick = autocomplete;

// Reset du formulaire
function reset(event) {
    event.preventDefault();
    clearForm();
    f.nom.value = "";
    f.prenom.value = "";
    f.zipcode.value = "";
}

document.getElementById("reset").onclick = reset;

// fonction de validation principale

const validation = function(event){
    event.preventDefault();
    clearForm();
    let formIsOk = true;
    if(!checkLength(f.nom.value, 32, 1)) formIsOk = false;
    if(!checkLength(f.prenom.value, 32, 1)) formIsOk = false;
    if(!checkRange(f.zipcode.value,9999,1000)) formIsOk = false;
    if(formIsOk){
        let p = document.createElement('p');
        p.innerText = 'Formulaire valide';
        f.appendChild(p);
    }
}

f.onsubmit = validation;

//micro-fonctions de validations
//longueur des valeurs
const checkLength = function(value, maxLength, minLength = 0){
    return value.length >= minLength && value.length <= maxLength;
}

//le range de valeur
const checkRange = function(value, maxValue, minvalue){
    let val = parseInt(value);
    return !isNaN(val) && val>=minvalue && val <= maxValue;
}

//Fonction nettoyage du formulaire
const clearForm = function(){
    let p = f.querySelector('p');
    if(p) p.remove();
}



