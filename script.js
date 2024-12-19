// Function to add the 16 divs

document.addEventListener("DOMContentLoaded", function() {
    addDivs();
});


function addDivs() {
    for (let i = 0; i < 16; i++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        document.getElementById("container").appendChild(cell);
    };
};