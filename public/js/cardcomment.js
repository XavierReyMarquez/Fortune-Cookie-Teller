const commentHandler = async () => {
    const comment = document.querySelector('#journalinput').value.trim();
    if (comment) {

        // save to local storage as backup
        if (localStorage.getItem('comments') == null) {
            // make new local storage if it doesn't yet exist
            localStorage.setItem('comments', JSON.stringify([]));
        }
        // set comment in local storage
        const currentComments = JSON.parse(localStorage.getItem('comments'))
        currentComments.push(comment)
        localStorage.setItem("comments", JSON.stringify(currentComments));

        // Send a POST request to the API endpoint
        /* 
            //TODO: fix post Card method 
            const response = await fetch('/api/card/comment', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('.replace');
            } else {
                alert("There was a problem saving your comment", response.statusText);
            }
        */

        // clear text area
        document.querySelector('#journalinput').value = '';
    }
}


document
  .querySelector('#save-btn')
  .addEventListener('click', commentHandler);


// CRUD routes : update, Delete, Get route
