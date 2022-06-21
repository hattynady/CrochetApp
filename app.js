const data = {
    womenSize: {
        'chest': [29, 33, 37, 41, 45, 49, 53, 57, 61],
        'centerBack': [26.25, 27.25, 28.25, 29.25, 29.25, 30.25, 30.75, 31.75, 31.75],
        'backWaist': [16.5, 17, 17.25, 17.5, 17.75, 18, 18, 18.5, 18.5], 
        'crossBack': [14.25, 14.75, 15.75, 16.75, 17.5, 18, 18, 18.5, 18.5], 
        'armLength': [16.5, 17, 17, 17.5, 17.5, 18, 18, 18.5, 18.5], 
        'upperArm': [9.75, 10.25, 11, 12, 13.5, 15.5, 17, 18.5, 18.5], 
        'armholeDepth': [6.25, 6.75, 7.25, 7.75, 8.25, 8.75, 9.25, 9.75, 10.25], 
        'waist': [23.5, 25.75, 29, 33, 37, 41, 44.5, 46.5, 49.5], 
        'hips': [33.5, 35.5, 39, 43, 47, 52.5, 54.5, 56.5, 61.5]
    },
    sizeLut: ["X-Small", "Small", "Medium", "Large", "X-Large", "2X", "3X", "4X", "5X"]
}
var canClear = false;

function process() {
    const rowGage = document.querySelector("#rowGageInp").value;
    const stsGage = document.querySelector("#stsGageInp").value;
    const size = document.querySelector("#menu").value;
    
    if (size !== "womenSize") {
        alert("Please select a size");
        return;
    }
    
    if (rowGage <= 0 || stsGage <= 0 ) {
        alert("Please enter a row and sts gage");
        return;
    }

    for (let i = 0; i < data.womenSize.chest.length; i++) {

        for (const prop in data.womenSize) {
            const row = document.getElementById(prop);
            const col = document.createElement("td");

            const sts = data.womenSize[prop][i] * stsGage;
            const rows = data.womenSize[prop][i] * rowGage;

            col.innerHTML = "(" + sts.toString() + " , " + rows.toString() + ")";
            col.className = "vals";
            row.appendChild(col);
        }
    }
    canClear = true;
}

function clearTable() {
    if (!canClear) return;

    const listOfVals = document.querySelectorAll(".vals");
    
    for (let i = 0; i < listOfVals.length; i++) {
        listOfVals[i].remove();
    }
    canClear = false;
}

function isValid(prop) {
    for (const item in data.womenSize) {
        if (prop === item) return true;
    }
    return false;
}

function getSize(d) {
    let count = 0;
    for (let key in d) {
        count++;
    }   
    return count;
}


