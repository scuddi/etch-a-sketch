// Function to add the 16 divs

document.addEventListener("DOMContentLoaded", function() {
    addDivs();
});

function addDivs() {
    for (let i = 0; i < 256; i++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.id = i;
        document.getElementById("container").appendChild(cell);
        cell.setAttribute("onmouseover", `paintDivs(${i})`)
    };
};

function paintDivs(i) {
    document.getElementById(i).style.background = "blue";
}