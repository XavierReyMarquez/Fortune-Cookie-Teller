// TODO: profile JS goes here

// Get comments from local storage (only until Card POST is working)
const commentsInLocalStorage = localStorage.getItem('comments')
if (commentsInLocalStorage == null) {
    //Set empty state for user
   document.querySelector('#user-comments').textContent = "You have no saved comments yet!"
} else {
    // populate comments on profile page
    document.querySelector('#user-comments').textContent = JSON.parse(commentsInLocalStorage)

}