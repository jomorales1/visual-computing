function setup() {
    createCanvas(400, 400, WEBGL);
}
  
function draw() {
    background(200);
    orbitControl();
    beginShape();
    vertex(0, -100, 0);
    vertex(0, 0, -100);
    vertex(-100, 0, 0);
    endShape(CLOSE);
    beginShape();
    vertex(0, -100, 0);
    vertex(0, 0, -100);
    vertex(100, 0, 0);
    endShape(CLOSE);
    beginShape();
    vertex(0, 100, 0);
    vertex(0, 0, -100);
    vertex(-100, 0, 0);
    endShape(CLOSE);
    beginShape();
    vertex(0, 100, 0);
    vertex(0, 0, -100);
    vertex(100, 0, 0);
    endShape(CLOSE);
  
    beginShape();
    vertex(0, 100, 0);
    vertex(0, 0, 100);
    vertex(100, 0, 0);
    endShape(CLOSE);
    beginShape();
    vertex(0, 100, 0);
    vertex(0, 0, 100);
    vertex(-100, 0, 0);
    endShape(CLOSE);
    beginShape();
    vertex(0, -100, 0);
    vertex(0, 0, 100);
    vertex(100, 0, 0);
    endShape(CLOSE);
    beginShape();
    vertex(0, -100, 0);
    vertex(0, 0, 100);
    vertex(-100, 0, 0);
    endShape(CLOSE);
}