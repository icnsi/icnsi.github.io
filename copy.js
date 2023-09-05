const textToCopy = "https://shiroharu.eu.org";
const buttons = document.querySelectorAll('.copy-button');

  buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand('copy');

    document.body.removeChild(textarea);

    button.innerText = 'Tautan telah disalin!';
    button.disabled = true;

    setTimeout(function() {
      button.innerText = 'https://shiroharu.eu.org';
      button.disabled = false;
    }, 2000);
  });
});
