let results = [];
let continueLoop = true;

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (continueLoop) {

    let x = prompt("Enter first number:");
    if (x === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let y = prompt("Enter second number:");
    if (y === null) break;

    let result;

    // Check if numbers are valid
    if (isNaN(x) || isNaN(y)) {
        result = "Invalid number";
    } else {
        x = Number(x);
        y = Number(y);

        if (operator === "+") {
            result = x + y;
        } else if (operator === "-") {
            result = x - y;
        } else if (operator === "*") {
            result = x * y;
        } else if (operator === "/") {
            result = y !== 0 ? x / y : "Cannot divide by 0";
        } else if (operator === "%") {
            result = y !== 0 ? x % y : "Cannot divide by 0";
        } else {
            result = "Invalid operator";
        }

        // Store only valid numeric results
        if (typeof result === "number") {
            results.push(result);
        }
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");


// ✅ SUMMARY TABLE
if (results.length > 0) {

    let total = 0;
    let min = results[0];
    let max = results[0];

    for (let i = 0; i < results.length; i++) {
        total += results[i];

        if (results[i] < min) {
            min = results[i];
        }

        if (results[i] > max) {
            max = results[i];
        }
    }

    let average = total / results.length;

    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + average + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
