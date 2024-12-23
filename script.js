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

// Function for user prompt and to restart the entire site

function restartSite() {
    let numberOfSquaresPerSide = prompt("How many squares should each side of your Etch-A-Sketch have? 100 is the maximum", 100);
    alert(`You chose ${numberOfSquaresPerSide}`);
}