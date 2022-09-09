let accordion = document.getElementsByClassName("accordion")

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        // for(let j = 0; j < accordion.length; j++){
        //     accordion[j].nextElementSibling.style.maxHeight = null
        // }

        this.classList.toggle("active")
        let panel = this.nextElementSibling
        if(panel.style.maxHeight){
            panel.style.maxHeight = null
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })
}