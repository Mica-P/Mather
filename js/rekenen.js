var GetalInvoer;
var GetalTot;
var resultaat;

function Bereken() {
    document.getElementById("dResultaat").innerHTML = "";
    resultaat = "";
    var keuze = document.getElementById("opKeuze").value;
    switch (keuze) {
        case "tafel":
            document.getElementById("dResultaat").innerHTML = Tafels();
            break;
        case "macht":
            document.getElementById("dResultaat").innerHTML = Machten();
            break;
        case "breuk":
            document.getElementById("dResultaat").innerHTML = Breuken();
            break;
        case "kwadraat":

            break;
        default:
            break;
    }
}

function opzetKeuze() {
    clear();
    var keuze = document.getElementById("opKeuze").value;
    if (keuze == "tafel") {
        document.getElementById("txt_Ond3_Tot").style.display = "inline";
    } else {
        document.getElementById("txt_Ond3_Tot").style.display = "none";
    }
}

function clear() {

}

function Tafels() {
    GetalInvoer = document.getElementById("txt_Ond3_In").value;
    GetalTot = document.getElementById("txt_Ond3_Tot").value;

    for (var i = 0; i <= GetalTot; i++) {
        resultaat += i + " x " + GetalInvoer + " = " + (i * GetalInvoer) + "<br />";
    }
    return resultaat;
}

function Machten() {
    GetalInvoer = document.getElementById("txt_Ond3_In").value;

    for (var i = 0; i <= 15; i++) {
        resultaat += GetalInvoer + "<sup>" + i + "</sup> = " + (Math.pow(GetalInvoer, i)) + "<br />";
    }
    return resultaat;
}

function Breuken() {
    GetalInvoer = document.getElementById("txt_Ond3_In").value;
    GetalTot = document.getElementById("txt_Ond3_Tot").value;

    t1 = document.getElementById("n1");
    t2 = document.getElementById("n2");
    x = t1.value - 0;
    y = t2.value - 0;

    message = document.getElementById("mess");
    message.innerHTML = ("This simplifies to " + ans + " .");

    getvals();
    for (i = 1; i < x + y; ++1) {
        for (j = 1; j < x + y; ++j) {
            if (x * i == y * j) {
                ans = j + "/" + i;
                output();
                return;
            }
        }
    }
}

function Kwadraten() {

}

// Letters for hexadecimal conversion
const letters = ["A", "B", "C", "D", "E", "F", "G"];

function convert() {
    let convType = document.getElementById("options").value;
    let initValue = document.getElementById("initVal").value;

    // The correct conversion is decided based on the dropdown selection
    switch (convType) {
        case "BINHEX":
            if (isBin(initValue) == true) {
                var res = convertBinaryHexadecimal(initValue);
            } else {
                alert("You idiot.");
            }
            break;
        case "HEXBIN":
            if (isHex(initValue) == true) {
                var dec = convertHexadecimalDecimal(initValue);
                var res = convertDecimalBinary(dec);
            } else {
                alert("You idiot.");
            }
            break;
    }

    // Simple output statement
    document.getElementById("out").value = res;
}


// This function converts between dec and bin
function convertDecimalBinary(val) {
    let rems = [];
    do {
        rems.push(val % 2);
        val = Math.floor(val / 2);
    } while (val != 0);
    return rems.reverse().join("");
}

// This function converts between binary and hexadecimal
function convertBinaryHexadecimal(val) {
    val = val.split("");
    val = val.reverse();
    while (val.length % 4 != 0) {
        val.push("0");
    }
    val = val.reverse();
    let arr = [];
    let count = 0;
    for (i = 0; i < Math.floor(val.length / 4); i++) {
        arr.push([]);
        for (a = 0; a < 4; a++) {
            arr[i][a] = val[i * 4 + a];
        }
    }
    let finalArr = [];
    for (i = 0; i < arr.length; i++) {
        for (a = 0; a < 4; a++) {
            count += arr[i][a] * Math.pow(2, 3 - a);
        }
        finalArr[i] = count;
        count = 0;
    }
    for (i = 0; i < finalArr.length; i++) {
        if (finalArr[i] > 9) {
            finalArr[i] = letters[finalArr[i] - 10];
        }
    }
    return finalArr.join("");
}

// This function converts between hexadecmial and decimal
function convertHexadecimalDecimal(val) {
    val = val.split("");

    for (i = 0; i < val.length; i++) {
        if (val[i].search(/[a-g]/i) != -1) {
            let index = letters.indexOf(val[i]);
            index = index + 10;
            val[i] = index;
        }
    }
    console.log(val);

    let count = 0;
    let total = 0;
    for (i = val.length - 1; i > -1; i--) {
        total += val[i] * Math.pow(16, count);
        count++;
    }
    return total;
}

function isBin(string) {
    if (string.search(/[2-9]/) != -1 || string.search(/[a-z]/i) != -1) {
        return false;
    } else {
        return true;
    }
}

function isHex(string) {
    if (string.search(/[g-z]/i) != -1) {
        return false;
    } else {
        return true;
    }
}
