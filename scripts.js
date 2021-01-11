'use strict';

console.log('Scripts Loaded');
// Event Listener
const generateMadlib = document.querySelector('#generateMadlib');

generateMadlib.addEventListener('submit', function(event) {
    event.preventDefault();
    // Event function
    const inputSelectors = document.querySelectorAll("input");
    const noun = document.querySelector("#nounResponse");
    const adjective = document.querySelector("#adjectiveResponse");
    const anotherNoun = document.querySelector("#anotherNounresponse");
    const place = document.querySelector("#placeResponse");
    inputSelectors.forEach(function(inputItem) {

        if (inputItem.noun === "noun") {
            nounResponse.innerHTML = inputItem.value;
        }
        if (inputItem.adjective === "adjective") {
            adjectiveResponse.innerHTML = inputItem.value;

        }

        if (inputItem.anotherNoun === "anotherNoun") {
            anotherNounrespose.innerHTML = inputItem.value;

        }
        if (inputItem.place === "place") {
            placeResponse.innerHTML = inputItem.value;
        }
    });
})