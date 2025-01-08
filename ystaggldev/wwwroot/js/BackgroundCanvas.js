class Circle {
    constructor(xpos, ypos, xvel, yvel, radius, colour) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.xvel = xvel;
        this.yvel = yvel;
        this.radius = radius;
        this.colour = colour;
    }

    draw(context) {
        context.fillStyle = this.colour;
        context.strokeStyle = this.colour;
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }

    update_position(context) {
        this.xpos += this.xvel;
        this.ypos += this.yvel;
        if (this.xpos >= context.canvas.width || this.xpos <= 0) {
            this.xvel *= -1;
            this.xpos += this.xvel * 2
        }
        if (this.ypos >= context.canvas.height || this.ypos <= 0) {
            this.yvel *= -1;
            this.ypos += this.xvel * 2
        }
        this.draw(context);
    }
}

function GenerateCircles(quantity, x_pos_max, y_pos_max, max_radius, colours, velocity_max) {
    circles = [];
    for (var i = 0; i < quantity; i++) {
        let xpos = Math.random() * x_pos_max;
        let ypos = Math.random() * y_pos_max;
        let xvel = (Math.random() - 0.5) * 2 * velocity_max;
        let yvel = (Math.random() - 0.5) * 2 * velocity_max;
        let radius = Math.random() * max_radius;

        let colour_code = Math.floor(Math.random() * colours.length);
        let colour = colours[colour_code];

        console.log(colour);
        this_circle = new Circle(xpos, ypos, xvel, yvel, radius, colour);
        circles.push(this_circle);
    }
    return circles;
}

function AnimateCircles(context, circles) {
    function render() {
        requestAnimationFrame(render);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        for (var i = 0; i < circles.length; i++) {
            circles[i].update_position(context);
        }
    }
    render();
}


function BackgroundCanvas(id) {
    var circle_quantity = 500;
    var colours = ["#419ec3", "#e2004a", "#ffb000"]
    var max_radius = 1;
    var max_velocity = 0.1;

    let canvas = document.getElementById(id);

    if (canvas == null) {
        return false;
    }

    var window_height = window.innerHeight;
    var window_width = window.innerWidth;
    canvas.height = window_height;
    canvas.width = window_width;

    let context = canvas.getContext("2d");

    let circles = GenerateCircles(circle_quantity, window_width, window_height, max_radius, colours, max_velocity);

    AnimateCircles(context, circles);

};