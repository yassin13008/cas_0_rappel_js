"use strict"; // Ajout de sécurité

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
});



function onClickXHRButton(){

    const xhr = new XMLHttpRequest();

    xhr.open('get','contenu-json.json');
    
    xhr.addEventListener("load", function() {

        console.log("Statut de la réponse: "+ xhr.status + " -  " + xhr.statusText);

        const container = document.getElementById("xhr-response");
        
        const jsonData = xhr.responseText;

        container.innerHTML = jsonData;

        const data = JSON.parse(jsonData);
        console.log(data);
        console.log(jsonData);

    });
    
    xhr.addEventListener("error", function(){
        console.log("La requte AJAX a échouée ! ☠ ")
    })

    xhr.send();
    
}


