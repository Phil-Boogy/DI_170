const disp_name = document.getElementById('char-name');
const disp_height = document.getElementById('char-height');
const disp_gender = document.getElementById('char-gender');
const disp_birth = document.getElementById('char-birth');
const disp_home = document.getElementById('char-homeworld');
const button = document.getElementById('btn')

async function getCharacter() {
    let ID = getRandomIntInclusive(1, 82)
    const character = await (await fetch(`https://www.swapi.tech/api/people/${ID}`)).json()

    const { result: { properties: { name, height, gender, birth_year, homeworld } } } = character
    const worldResponse = await (await fetch(homeworld)).json()
    const { result: { properties: { name: worldName } } } = worldResponse

    return { name, height, gender, birth_year, homeworld: worldName }
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function displayCharacter({ name, height, gender, birth_year, homeworld }) {

    //document.getElementById("card-loader").classList.add("hidden");
    // document.getElementById("card-content").classList.remove("hidden");
    disp_name.innerText = name
    disp_gender.innerText = gender
    disp_height.innerText = height
    disp_birth.innerText = birth_year
    disp_home.innerText = homeworld
};

button.addEventListener('click', async () => {
    document.getElementById("card-empty").classList.add("hidden");
    document.getElementById("card-loader").classList.remove("hidden");
    document.getElementById("card-content").classList.add("hidden");

    const character = await getCharacter()

    document.getElementById("card-loader").classList.add("hidden");
    document.getElementById("card-content").classList.remove("hidden");

    displayCharacter(character)
});