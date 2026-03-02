const button = document.querySelector("#searchBtn");
const wrapper = document.getElementById("wrapper");
const clearAll = document.getElementById("clearAll")

button.addEventListener("click", async (event) => {
    event.preventDefault();
    const searchTerm = document.querySelector("#gif-search").value;

    const url = `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=FkhLnRQ2XRqEoowVzc7d2cZejLmIE0Zc`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        // console.log(JSON.stringify(data, null, 2));
        const gifUrl = data.data.images.original.url;
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `<img src="${gifUrl}" /><br><button>DELETE</button><br>`;
        const deleteBtn = newDiv.querySelector('button');
        deleteBtn.addEventListener('click', () => newDiv.remove());
        // wrapper.appendChild("newDiv");
        document.querySelector('#wrapper').appendChild(newDiv);

    } catch (error) {
        console.error("Something went wrong:", error);
    }
});

clearAll.addEventListener("click", () => {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
});