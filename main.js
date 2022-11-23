// "use strict"; // Ajout de sécurité

// document.addEventListener("DOMContentLoaded", function() {

//     document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
// });



// function onClickXHRButton(){

//     ajaxGetJson("contenu-json.json", ()=> {
//         console.log(data)
//     })
// }

"use strict"; // Ajout de sécurité

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
});



function onClickXHRButton(){

    ajaxGetJson("contenu-json.json",(data)=>{console.log(data);});
    
}