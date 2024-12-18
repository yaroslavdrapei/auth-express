/* eslint-disable */

window.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.form');
  const placeInfoElem = document.querySelector('.form-info');

  const authBtns = document.querySelectorAll('[data-action]');

  forms.forEach(form => {
    form.addEventListener('submit', formHandler);
  });

  async function formHandler(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const body = {};

    for (const [key, value] of formData) {
      body[key] = value;
    }

    console.log(body);

    const action = this.getAttribute('data-action');

    const response = await fetch(`http://localhost:3000/auth/${action}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .catch(err => console.log(err));

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('jwt', token); 
    } else {
      try {
        const { message } = await response.json();
      } catch (err) {
        console.log('Unexpected error:', err)
      }
    }

    placeInfoElem.textContent = `${response.status} ${response.statusText}`;

    [...this.children].forEach(child => child.value = '');
  }
});