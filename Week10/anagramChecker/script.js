const checkTerms = document.getElementById("checkTerms")

checkTerms.addEventListener("click", checker)

function isAnagram(textOne, textTwo) {
    const normalize = str => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return normalize(textOne) === normalize(textTwo);
}

function checker() {
    const textOne = document.getElementById("termOne").value;
    const textTwo = document.getElementById("termTwo").value;
    const result = document.getElementById('result');

    if (!textOne.trim() || !textTwo.trim()) {
        result.innerHTML = 'Please enter both strings.';
        result.className = 'show no';
        return;
    }

    const anagram = isAnagram(textOne, textTwo);
    result.innerHTML = anagram
        ? `"${textOne}" is an anagram of "${textTwo}"`
        : `"${textOne}" is not an anagram of "${textTwo}"`;
    result.className = anagram ? 'show yes' : 'show no'; // fix: was commented out
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') checker();
});