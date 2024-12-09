// enter circle's radius
do {
    radius = prompt("what is the value of your circles radius:");
    if (!/^[+]?\d+(\.\d+)?$/.test(radius)) {
        alert("enter your circle radius in numbers");
    }
} while (!/^[+]?\d+(\.\d+)?$/.test(radius));
//calculate rea of circle
let area = Math.PI * Math.pow(radius, 2);
alert(`The area of the circle is: ${area.toFixed(2)}`);

// enter number
do {
    num = prompt("what is the value you want to calculate its square root:");
    if (!/^[+]?\d+(\.\d+)?$/.test(num)) {
        alert("enter the number you want to calculate its square root");
    }
} while (!/^[+]?\d+(\.\d+)?$/.test(num));
//calculate square root
let root = Math.sqrt(num);
alert(`The sure root of the number is: ${root.toFixed(2)}`);

// enter angle
do {
    angle = prompt("what is the angle you want to calculate its cos:");
    if (!/^[+]?\d+(\.\d+)?$/.test(angle)) {
        alert("enter the angle you want to calculate its cos");
    }
} while (!/^[+]?\d+(\.\d+)?$/.test(angle));
//calculate cosine
angle = parseFloat(angle);
let radians = angle * ( Math.PI / 180);
let cosValue = Math.cos(radians);
document.write(`<h2>The cos of ${angle} ° is: ${cosValue.toFixed(4)}</h2>`);