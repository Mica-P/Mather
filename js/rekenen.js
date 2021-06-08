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

}

function Kwadraten() {

}

// Letters for hexadecimal conversion
const letters = ["A", "B", "C", "D", "E", "F"];

function convert() {
    let convType = document.getElementById("options").value;
    let initValue = document.getElementById("initVal").value;

    // The correct conversion is decided based on the dropdown selection
    switch (convType) {
        case "BINDEC":
            if (isBin(initValue) == true) {
                var res = convertBinaryDecimal(initValue);
            }
            break;
        case "DECBIN":
            if (isDec(initValue) == true) {
                var res = convertDecimalBinary(initValue);
            }
            break;
        case "DECHEX":
            if (isDec(initValue) == true) {
                var bin = convertDecimalBinary(initValue);
                var res = convertBinaryHexadecimal(bin);
            }
            break;
        case "BINHEX":
            if (isBin(initValue) == true) {
                var res = convertBinaryHexadecimal(initValue);
            }
            break;
        case "HEXDEC":
            if (isHex(initValue) == true) {
                var res = convertHexadecimalDecimal(initValue);
            }
            break;
        case "HEXBIN":
            if (isHex(initValue) == true) {
                var dec = convertHexadecimalDecimal(initValue);
                var res = convertDecimalBinary(dec);
            }
            break;
    }

    // Simple output statement
    document.getElementById("out").value = res;
}

// This function converts between bin and dec
function convertBinaryDecimal(val) {
    let revArr = val.split("").reverse();
    let total = 0;
    for (i = 0; i < revArr.length; i++) {
        total = total + revArr[i] * Math.pow(2, i);
    }
    return total;
}

// This function converts between hexadecmial and decimal
function convertHexadecimalDecimal(val) {
    val = val.split("");

    for (i = 0; i < val.length; i++) {
        if (val[i].search(/[a-f]/i) != -1) {
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

function isDec(string) {
    if (string.search(/[a-z]/i) != -1) {
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