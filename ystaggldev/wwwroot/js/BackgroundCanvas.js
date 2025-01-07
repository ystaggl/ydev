class Circle {
    constructor(xpos, ypos, radius, colour) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.colour = colour;
    }
    draw(context) {
        context.fillStyle = this.colour;
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }
}


function BackgroundCanvas(id) {
    
    let canvas = document.getElementById(id);

    if (canvas == null) {
        return false;
    }

    var window_height = window.innerHeight;
    var window_width = window.innerWidth;
    canvas.height = window_height;
    canvas.width = window_width;

    let context = canvas.getContext("2d");

    let my_circle = new Circle(100, 100, 5, "red");
    my_circle.draw(context);
};