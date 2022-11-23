


document.addEventListener('DOMContentLoaded',()=> {
    document.getElementById('xhr-button').addEventListener('click',onClickXHRButton)
})


function onClickXHRButton() {
    const xhr = new XMLHttpRequest()

    xhr.open("get","contenu-html.html");
    xhr.addEventListener('load',()=> {
        console.log("Statut de la reponse : " + xhr.status + " - " + xhr.statusText);
        const container = document.getElementById("xhr-response");
        const response = xhr.responseText;
        container.innerHTML = response;
    })



xhr.addEventListener("error", ()=> {
    console.log("La requête Ajax a échoué !")
})

xhr.send();
};
