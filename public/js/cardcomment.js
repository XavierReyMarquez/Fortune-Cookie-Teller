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
    
// Add save button handler if it exists (which happens when the user is logged in)
if (document.querySelector("#save-btn")) {
    document.querySelector('#save-btn').addEventListener('click', commentHandler);
}

// update the card(s) with the meaning 
const card1 = document.querySelector('#card-1')
const card2 = document.querySelector('#card-2')
const card3 = document.querySelector('#card-3')


if (card1) {
    const card1Meaning = JSON.parse(document.querySelector('#card-1').innerHTML)
    document.querySelector("#shadow1-notes").innerHTML = card1Meaning.shadow[0]
    document.querySelector("#light1-notes").innerHTML = card1Meaning.light[0]    
}
if (card2) { 
    const card2Meaning = JSON.parse(document.querySelector('#card-2').innerHTML)
    document.querySelector("#shadow2-notes").innerHTML = card2Meaning.shadow[1]
    document.querySelector("#light2-notes").innerHTML = card2Meaning.light[1]
 } 
if (card3) {
    const card3Meaning = JSON.parse(document.querySelector('#card-3').innerHTML)
    document.querySelector("#shadow3-notes").innerHTML = card3Meaning.shadow[2]
    document.querySelector("#light3-notes").innerHTML = card3Meaning.light[2]
}

// CRUD routes : update, Delete, Get route
