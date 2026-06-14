const form = document.getElementById("MyForm");
const input = document.getElementById("radius");
const output = document.getElementById("volume");


const submitHandler = (e) => {
    e.preventDefault();
    if (input.value) {
        const radius = Number(input.value);
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        output.value = volume;
    }
}

form.addEventListener("submit", submitHandler)