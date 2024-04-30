document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const csvContent = `Name,Email,Message\n${name},${email},${message}\n`;

    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);

    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'contact_submission.csv');
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);

    form.reset();
  });
});