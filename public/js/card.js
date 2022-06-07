const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#card-name').value.trim();
  const questionstoask = document
    .querySelector('#card-questionstoask')
    .value.trim();
  const meanings = document.querySelector('#card-meanings').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/card`, {
      method: 'POST',
      body: JSON.stringify({ name, questionstoask, meanings }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create card');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/card/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
