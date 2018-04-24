var canvas;
var ctx;
var railWayPath = /** @class */ (function () {
    function railWayPath(x, y, radius, color, linewidth) {
        if (radius === void 0) { radius = 2; }
        if (color === void 0) { color = 'white'; }
        if (linewidth === void 0) { linewidth = 2; }
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.color = "red";
        this.lineWidth = 2;
        this.radius = 10;
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.color = color;
        this.lineWidth = linewidth;
        this.radius = radius;
    }
    return railWayPath;
}());
var railWayPath1 = new railWayPath(200, 300, 50);
var railWayPath2 = new railWayPath(400, 550, 150, "blue", 5);
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    railWayPath1.draw();
    railWayPath2.draw();
}
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    gameLoop();
};
// Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.
// Tip: Use the stroke() method to actually draw the path on the canvas.
