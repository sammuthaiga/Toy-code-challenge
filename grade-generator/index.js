const form = document.getElementById("gradesForm");
const input = document.getElementById("marks");
const message = document.getElementById("message");
let button = document.getElementById('button')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInput(input);
});

function validateInput(input){
    console.log(input)
    console.log(input.value)

    const checkInput = input.value;
    if (checkInput > 79 && checkInput <= 100) {
    console.log("A");
    message.textContent = 'Hello, your grade is an : A.';
    } else if (checkInput >= 60 && checkInput <= 79) {
    console.log("B");
    message.textContent = 'Hello, your grade is: B.';
    } else if (checkInput > 49 && checkInput <= 59) {
    console.log("C");
    message.textContent = 'Hello, your grade is: C.';
    } else if (checkInput > 40 && checkInput <= 49) {
    console.log("D");
    message.textContent = 'Hello, your grade is: D.';
    } else if (checkInput >= 0 && checkInput <= 40) {
    console.log("E");
    message.textContent = 'Hello your grade is an: E.';
    } else {
    console.log("Not gradeable");
    message.textContent = 'Sorry, your marks are out of range.';
    }
}