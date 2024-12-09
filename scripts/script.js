// get valid info
function validateInput() {
    let name, telephone, mobile, email, colorChoice;

    // Validate Name
    do {
        name = prompt("Enter your name (only characters):");
        if (!/^[a-zA-Z]+$/.test(name)) {
            alert("Invalid name. Please enter only letters.");
        }
    } while (!/^[a-zA-Z]+$/.test(name));

    // Validate Telephone Number
    do {
        telephone = prompt("Enter your telephone number (8 digits):");
        if (!/^\d{8}$/.test(telephone)) {
            alert("Invalid telephone number. It must be exactly 8 digits.");
        }
    } while (!/^\d{8}$/.test(telephone));

    // Validate Mobile Number
    do {
        mobile = prompt("Enter your mobile number (starts with 010, 011, or 012 and is 11 digits long):");
        if (!/^(010|011|012)\d{8}$/.test(mobile)) {
            alert("Invalid mobile number. It must start with 010, 011, or 012 and be 11 digits long.");
        }
    } while (!/^(010|011|012)\d{8}$/.test(mobile));

    // Validate Email
    do {
        email = prompt("Enter your email address:");
        if (!/^\w+@\w+\.\w+$/.test(email)) {
            alert("Invalid email address. Please enter a valid format (like this\"abc@123.com\")).");
        }
    } while (!/^\w+@\w+\.\w+$/.test(email));

    // Validate Color Choice
    const validColors = ["red", "green", "blue"];
    do {
        colorChoice = prompt("Choose a color for the message: red, green, or blue").toLowerCase();
        if (!validColors.includes(colorChoice)) {
            alert("Invalid color choice. Please choose red, green, or blue.");
        }
    } while (!validColors.includes(colorChoice));

    // Display the validated message
    displayMessage(name, telephone, mobile, email, colorChoice);
}

function displayMessage(name, telephone, mobile, email, color) {
    console.log(`%cWelcome dear guest ${name}`, `color:${color}`);
    console.log(`%cYour telephone number is ${telephone}`, `color:${color}`);
    console.log(`%cYour mobile number is ${mobile}`, `color:${color}`);
    console.log(`%cYour email address is ${email}`, `color:${color}`);
}

validateInput();

// find the largest word task
function findLargestWord(inputString) {
    const words = inputString.split(" ");

    let largestWord = "";
    let largestLength = 0;

    for (let word of words) {
        if (word.length > largestLength) {
            largestWord = word;      // Update the largest word
            largestLength = word.length;
        }
    }

    return largestWord;
}

let input = "This is a javascript string demo";
console.log(findLargestWord(input));


