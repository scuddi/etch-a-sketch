// Function to add the 16 divs

document.addEventListener("DOMContentLoaded", function() {
    addDivs();
});


function addDivs() {
    for (let i = 0; i < 256; i++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        document.getElementById("container").appendChild(cell);
    };
};