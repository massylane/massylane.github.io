var ellSize = 0;
let x = 1;
let y = 1;
let easing = 0.03;

function setup() {
   
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('menuOpen');
    canvas.style('display', 'inline-block');
    canvas.style('position', 'absolute');
    canvas.style('left', '0');
    canvas.style('top', '0');
    canvas.style('z-index', '-10');
    background(0, 174, 239);
}

function draw() {
    bgColor = color(0, 174, 239);
    bgColor.setAlpha(15);
    fill(bgColor);
    rect(0, 0, windowWidth, windowHeight);
    stroke(255)
    noFill();

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;

    ellSize++;

    ellipse(x, y, ellSize / 2, ellSize / 2);
    ellipse(x, y, ellSize, ellSize);
    ellipse(x, y, ellSize * 2, ellSize * 2);
    ellipse(x, y, ellSize * 4, ellSize * 4);
    ellipse(x, y, ellSize * 8, ellSize * 8);
    ellipse(x, y, ellSize * 16, ellSize * 16);

    if (ellSize > 150) {
        ellSize = 0;
    }
}


