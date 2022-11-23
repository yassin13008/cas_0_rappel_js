function ajaxGetJson(url, callback) {
    
    function onClickXHRButton(){

        const xhr = new XMLHttpRequest();
    
        xhr.open('get','url');
        
        xhr.addEventListener("load", function() {
    
            console.log("Statut de la réponse: "+ xhr.status + " -  " + xhr.statusText);
    
            const container = document.getElementById("xhr-response");
            
            const jsonData = xhr.responseText;
    
            container.innerHTML = jsonData;
    
            const data = JSON.parse(jsonData);
            
            callback(data);



    
        });
        
        xhr.addEventListener("error", function(){
            console.log("La requte AJAX a échouée ! ☠ ")
        })
    
        xhr.send();
        
    }
}