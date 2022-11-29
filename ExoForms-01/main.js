let f = document.myForm;


// Auto complétion du formulaire

function autocomplete(event) {
    event.preventDefault();
    f.nom.value = "Dupont";
    f.prenom.value = "Jean";
}
document.getElementById("completion").onclick = autocomplete;

// Reset du formulaire
function reset(event) {
    event.preventDefault();
    f.nom.value = "";
    f.prenom.value = "";
}
document.getElementById("reset").onclick = reset;


