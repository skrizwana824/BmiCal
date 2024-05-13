const bmif = (mass, height) => {
    const bmi = mass / ((height / 100) ** 2);
    return bmi;
};

const checkbmi = () => {
    const mass = parseFloat(prompt("Enter your mass in Kg?"));
    const height = parseFloat(prompt("Enter your height in cm?"));
    const bmi = bmif(mass, height);

    if (bmi < 18.5) {
        alert("You are underweight");
    } else if (bmi < 25) {
        alert("You have normal BMI");
    } else if (bmi < 30) {
        alert("You are overweight");
    } else {
        alert("You are obese");
    }
};

let calbmi = true;
while (calbmi) {
    checkbmi();
    const conti = prompt("Do you want to calculate BMI again? (yes/no)");
    calbmi = conti.toLowerCase() === "yes";
}
