function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function calculateTrig(func) {
    let value = parseFloat(document.getElementById("display").value);
    if (isNaN(value)) return;
    switch (func) {
        case 'sin': document.getElementById("display").value = Math.sin(value); break;
        case 'cos': document.getElementById("display").value = Math.cos(value); break;
        case 'tan': document.getElementById("display").value = Math.tan(value); break;
        case 'sqrt': document.getElementById("display").value = Math.sqrt(value); break;
    }
}
