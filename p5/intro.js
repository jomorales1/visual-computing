function setup() {
    createCanvas(200, 400);
    colorMode(RGB, 1);
}

function draw() {
    background(0, 1, 0);
    fill(1, 0, 0);
    rect(20, 20, 60, 60);
    fill(0, 1, 1);
    rect(mouseX, mouseY, 60, 60);
}