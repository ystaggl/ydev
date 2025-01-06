
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

    context.fillStyle = "red";
    context.beginPath();
    context.arc(90, 100, 5, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
}