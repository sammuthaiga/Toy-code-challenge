const form=document.getElementById("netSalary");
const input=document.getElementById("grossPay");
const message=document.getElementById("grossPay")
form.addEventListener("submit",(event) => {event.preventDefault();
validateInput(input);
});
// we validate our input to ensure only the type of data we want is keyed
function validateInput(input){ console.log(input.value);
let grossPay=input.value;
const NSSF=500;


//if..else statement to calculate payee
{
if(grossPay <24001){
    payee=(grossPay*0.1);
    console.log(`Your tax is ksh ${payee}`);
}
else if (grossPay <32334){
    payee=(grossPay*0.25);
    console.log(`Your tax is ksh ${payee}`);
}
else if (grossPay>=32334){
    payee=(grossPay*0.38);
    console.log(`Your tax is ksh ${payee}`);
}
else
 console.log("input valid number");

//calculating nhif
// we use && to return true only if both operands are true .
if (grossPay >= 0 && grossPay <= 5999) {
    NHIF=150;
    console.log(`Your NHIF is ksh ${NHIF}`);
}
else if (grossPay >= 6000 && grossPay <= 7999){
    NHIF=300;
    console.log(`Your NHIF is ksh ${NHIF}`);
}
else if (grossPay >= 8000 && grossPay <= 11999){
    NHIF=400;
    console.log(`Your NHIF is ksh ${NHIF}`);

} else if (grossPay >= 12000 && grossPay <= 14999) {
    NHIF=500;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 15000 && grossPay <= 19999) {
    NHIF=600;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 20000 && grossPay <= 24999) {
    NHIF=750;
    console.log(`Your NHIF is ksh ${NHIF}`);
} 
else if (grossPay >= 25000 && grossPay <= 29999) {
    NHIF=850;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 30000 && grossPay <= 34999) {
    NHIF=950;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 35000 && grossPay <= 39999) {
    NHIF=1000;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 40000 && grossPay <= 44999) {
    NHIF=1100;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 45000 && grossPay <= 49999) {
    NHIF=1200;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >=50000 && grossPay <= 59999) {
    NHIF=1300;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 60000 && grossPay <= 69999) {
    NHIF=1400;
    console.log(`Your NHIF is ksh ${NHIF}`);;
} else if (grossPay >= 70000 && grossPay <= 79999) {
    NHIF=1400;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 80000 && grossPay <= 89999) {
    NHIF=1500;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 90000 && grossPay <= 99999) {
    NHIF=1600;
    console.log(`Your NHIF is ksh ${NHIF}`);
} else if (grossPay >= 100000) {
    NHIF=1      700;
    console.log(`Your NHIF is ksh ${NHIF}`);
}

console.log(`Your NHIF is ksh ${NHIF}`);
}
deductions = NHIF + payee + NSSF;
console.log(`Your NSSF is ksh:${NSSF} `)
console.log("your net salary is ksh" ,netPay = grossPay - deductions, );
}