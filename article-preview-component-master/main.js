const shareButton = document.querySelector('.share')
const shareBar = document.querySelector('.share-bar')
shareButton.addEventListener('click', function(){
    shareBar.classList.toggle('hidden')
})

