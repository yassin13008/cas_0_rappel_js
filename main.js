document.addEventListener('DOMContentLoaded',()=> {
    console.log('yes easy')
})

//  Event qui va se produire lorsque les elements du dom seront chargé

const btn = document.getElementById('xhr-button')

// J'ai déclaré la const btn avec les elements de l'id xhr-button

function onClickXHRButton(params) {
    console.log("J'ai cliquer sur ce bouton")
}

//  Je crée la fonction en question

document.addEventListener('DOMContentLoaded',()=> {
    document.getElementById('xhr-button').addEventListener('click',onClickXHRButton)
})

// Call back = fonction qui appel une autre fonction

document.addEventListener('click', ()=> {
    let container = document.getElementById('xhr-response');
    container.textContent="Direct dans l'encart"
})

// test de commit