window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const body = {};

    for (const [key, value] of formData) {
      body[key] = value;
    }

    [...this.children].forEach(child => child.value = '');
  });
});