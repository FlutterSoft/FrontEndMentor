let accordion = document.getElementsByClassName("accordion")

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        for(let j = 0; j < accordion.length; j++){
            if(accordion[j] != this){
                accordion[j].nextElementSibling.style.maxHeight = null
                accordion[j].classList.remove('active')
            }

        }

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