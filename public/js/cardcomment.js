const commentHandler = async () => {

const comment = document.querySelector('#journalInput').value.trim();
    if (comment) {
        console.log(comment)
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/comment', {
            //change comment in line 7 to route point for journal input
          method: 'POST',
          body: JSON.stringify({ comment }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('.replace');
        } else {
            alert(response.statusText);
        }
    }

}

// CRUD routes : update, Delete, Get route
