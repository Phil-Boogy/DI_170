// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function alertHello() {
    alert("Hello World")
};

setTimeout(alertHello, 2000);


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.

function helloParagraph() {
    const container = document.getElementById("container");
    const para = document.createElement("p");
    para.innerText = "Hello World"
    container.appendChild(para)
    if (container.children.length >= 5) {
        clearInterval(helloInterval);
    }
};

setTimeout(helloParagraph, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.
// The interval will be cleared(ie.clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared(ie.clearInterval) as soon as there will be 5 paragraphs inside the < div id = "container" >.

const clearButton = document.getElementById("clear")
const helloInterval = setInterval(helloParagraph, 2000)
clearButton.addEventListener("click", () => clearInterval(helloInterval))

