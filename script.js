// Function to add the 16 divs

document.addEventListener("DOMContentLoaded", function() {
    addDivs();
});

function addDivs() {
    for (let i = 0; i < 256; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = i;
        document.getElementById("container").appendChild(cell);
        cell.setAttribute("onmouseover", `paintDivs(${i})`);
    };
};

// Paint divs while mouseover

function paintDivs(i) {
    document.getElementById(i).style.background = "blue";
};

// Function for user prompt and to restart the entire site

function restartSite() {
    let numberOfSquaresPerSide = prompt("How many squares should each side of your Etch-A-Sketch have? 100 is the maximum", 100);
    alert(`You chose ${numberOfSquaresPerSide}`);
    document.querySelectorAll(".cell").forEach(e => e.remove());
    document.querySelectorAll(".cell_custom").forEach(e => e.remove());
    addDivsCustomised(numberOfSquaresPerSide);
};

// Function for when site is restarted through button and user chooses amount of squares

function addDivsCustomised(numberOfSquaresPerSide) {
    for (let i = 0; i < numberOfSquaresPerSide * numberOfSquaresPerSide; i++) {
        let cell_custom = document.createElement("div");
        cell_custom.className = "cell_custom";
        cell_custom.id = i;
        document.getElementById("container").appendChild(cell_custom);
        cell_custom.setAttribute("onmouseover", `paintDivs(${i})`);

        let cell_custom_width_height = 100 / numberOfSquaresPerSide;
        cell_custom.setAttribute("style", `width:${cell_custom_width_height}%; height:${cell_custom_width_height}%`);
    };
}