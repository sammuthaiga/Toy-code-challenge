//link to the front end (HTML, CSS.)
const form = document.getElementById("speedForm");
const input = document.getElementById("speed");
const message = document.getElementById("message");
let button = document.getElementById('button');

//Add the event listener to trigger submit event when the the submit button is clicked.
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    detectedSpeed(input);
});

function detectedSpeed(input){
    console.log(input)
    console.log(input.value)
    const detectedSpeed = input.value;
//conditional statement to evaluate student grade from user input
    let points;
    let currentPoints = (detectedSpeed - 70) / 5;
        if(detectedSpeed <= 70) {
            return message.textContent = 'OK';
        }else if(detectedSpeed > 70 && detectedSpeed < 130){
            return currentPoints;
        }else if(currentPoints >= 12){
            return message.textContent = 'License suspended';
        }
}
