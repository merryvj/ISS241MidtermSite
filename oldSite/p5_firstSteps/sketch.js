
function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(51, 204, 204);
    strokeCap(ROUND);
    noLoop();
    strokeWeight(2);
    stroke(255);
    noFill();
    for (let i = 0; i < 20; i++){
        curveGen();
        fill(255);
        ellipse(random(0, width), random(0, height), i, i);
        noFill();
    }


}


function curveGen(){
    let x1 = width * (random(0,10) / 10);
    let x2 = width * (random(0,10) / 10);
    let x3 = width * (random(0,10) / 10);
    let x4 = width * (random(0,10) / 10);
    let y1 = height * (random(0,10) / 10);
    let y2 = height * (random(0,10) / 10);
    let y3 = height * (random(0,10) / 10);
    let y4 = height * (random(0,10) / 10);
    
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}



    

