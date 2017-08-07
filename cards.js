console.log("cards.js");

let input = document.getElementById("inputField");

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        let messageText = input.value;
        let output = document.getElementById("output");
        let createDiv = document.createElement("div");
        let createMessage = document.createElement("p");
        let createDltBtn = document.createElement("button")

        dltBtn = "Delete";
        msgDelete = dltBtn.name
        createMessage.innerHTML = messageText;

        createDltBtn.addEventListener("click", function(event){

            let card = this.parentNode;
            output.removeChild(card);
        });

        createDiv.append(createMessage);
        createDiv.appendChild(createDltBtn);
        output.appendChild(createDiv);
        
    }
});