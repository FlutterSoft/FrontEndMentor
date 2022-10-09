const markAllAsReadBtn = document.querySelector('.mark-all-as-read')
const notifications = document.querySelectorAll('.notification')
const notificationCount = document.querySelector('.notification-count')
markAllAsReadBtn.addEventListener('click', markAllAs)

function markAllAs(){
    if(markAllAsReadBtn.innerHTML == "Mark all as read"){
        markAllAsRead()
    }
    else{
        markAllAsUnread()
    }
}

function markAllAsRead(){
    notifications.forEach(notification => {
        notification.classList.remove('unread')
    })
    markAllAsReadBtn.innerHTML = "Mark all as unread"
    notificationCount.innerHTML = document.querySelectorAll('.unread').length
}
function markAllAsUnread(){
    notifications.forEach(notification => {
        notification.classList.add('unread')
    })
    markAllAsReadBtn.innerHTML = "Mark all as read"
    notificationCount.innerHTML = document.querySelectorAll('.unread').length
}