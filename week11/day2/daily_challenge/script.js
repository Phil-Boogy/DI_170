const form = document.getElementById('myform');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    const jsonString = JSON.stringify(formObject, null, 2);

    const pre = document.createElement('pre');
    pre.textContent = jsonString;
    output.appendChild(pre);
});