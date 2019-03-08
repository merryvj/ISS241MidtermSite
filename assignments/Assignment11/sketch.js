var winMiddle = window.innerWidth/2;
var winCenter = window.innerHeight/2;

var canvas1 = function(sketch){
    var red = 0;
    var addRed = 10;
    var rad = 50;
    var addRad = 15;
    
    sketch.setup = function(){
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.background(000);
        sketch.frameRate(20);
    }
    
    sketch.draw = function(){
        sketch.ellipse(winMiddle, winCenter, rad, rad);
        sketch.fill(red, 0, 0);
        
        red += addRed;
        if (red > 255 || red < -255) {
            addRed *= -1;
        }
        
        rad += addRad;
        if (rad > 200 || rad < 50){
            addRad *=-1;
        }
        
    }
}

var sketch1 = new p5(canvas1,'canvas1');




var canvas2 = function(sketch){
    var beginX = 10;
    var beginY = 10;
    var endX = 100;
    var endY = 400;
    var x = 0;
    var y = 0;
    var distX;
    var distY;
    var pctTraveled = 0;
    var step = 0.005;
    
    sketch.setup = function(){
    
    sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.background(32, 36, 94);
        sketch.frameRate(300);
        distX = endX - beginX;
        distY = endY - beginY;
        
    }
    
    sketch.draw = function(){
        pctTraveled += step;
        
        if (pctTraveled < 1.0){
            x = beginX + pctTraveled * distX;
            y = beginY + pctTraveled * distY;
        }
        sketch.noStroke();
        sketch.fill(5, 188, 165);
        sketch.ellipse(x, y, 20, 20);
    }
    
    sketch.mousePressed = function(){
        pctTraveled = 0;
        beginX = x;
        beginY = y;
        endX = sketch.mouseX;
        endY = sketch.mouseY;
        distX = endX - beginX;
        distY = endY - beginY;
    }
    
    
}

var sketch2 = new p5(canvas2, 'canvas2');


var canvas3 = function(sketch){
    var r, g, b;
    
    
    sketch.setup = function(){
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        sketch.background(200);
        sketch.frameRate(20);
    }

    
        
     sketch.draw = function(){
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 100, 100);
          r = sketch.random(255);
          g = sketch.random(255);
          b = sketch.random(255);
        sketch.fill(r, g, b);
    }
    }
    
   


var sketch3 = new p5(canvas3, 'canvas3');