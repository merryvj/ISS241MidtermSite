function setup(){
    
    createCanvas(windowWidth, windowHeight);
    var addButton = createButton('+ add a shape').parent('buttons');
    addButton.mousePressed(add);
    
    var clearButton = createButton('clear').addClass('clearButton').parent('buttons');
    clearButton.mousePressed(reset);
    

}


function add(){
    var circle = new item();
    circle.display();
}

function reset(){
    clear();
}


class item {
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.radius = random(20, 50);
        
    }
    
    display() {
        noStroke();
        fill(random(255), random(255), random(255), 200);
        ellipse(this.x, this.y, this.radius, this.radius);
        
    }
}
