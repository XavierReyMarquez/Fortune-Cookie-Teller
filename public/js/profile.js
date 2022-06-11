
// Get comments from local storage (only until Card POST is working)
const commentsInLocalStorage = localStorage.getItem('comments')

if (commentsInLocalStorage == null) {
    //Set empty state for user
   document.querySelector('#user-comments').textContent = "You have no saved comments yet!"
} else {
    const commentDivs = []
    const myComments = JSON.parse(commentsInLocalStorage)

    myComments.forEach(comment => {
        commentDivs.push("<div>" + comment + "</div>")
    })

    // populate comments on profile page
    document.querySelector('#user-comments').innerHTML =commentDivs.join("<br />")
}