var canvas;
var ctx;
var railWayPath = /** @class */ (function () {
    function railWayPath(a, b, x, y, color, linewidth) {
        if (color === void 0) { color = 'Grey'; }
        if (linewidth === void 0) { linewidth = 10; }
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.a = 0;
        this.b = 0;
        this.color = "red";
        this.lineWidth = 5;
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.moveTo(_this.a, _this.b);
            ctx.lineTo(_this.x, _this.y);
            ctx.stroke();
            ctx.lineCap = 'round';
        };
        this.drawVertical = function () {
            for (var i = 80; i < 1280; i += 80) {
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = "DimGrey";
                ctx.lineWidth = 15;
                ctx.moveTo(i, 430);
                ctx.lineTo(i, 280);
                ctx.stroke();
                ctx.lineCap = 'round';
                for (var j = 80; j < 1280; j += 80) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 3;
                    ctx.moveTo(i, 430);
                    ctx.lineTo(i, 280);
                    ctx.stroke();
                    ctx.lineCap = 'round';
                }
            }
        };
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
        this.color = color;
        this.lineWidth = linewidth;
    }
    return railWayPath;
}());
var railWayPath1 = new railWayPath(0, 400, 1280, 400);
var railWayPath11 = new railWayPath(0, 407, 1280, 407, "black", 5);
var railWayPath2 = new railWayPath(0, 300, 1280, 300);
var railWayPath22 = new railWayPath(0, 307, 1280, 307, "black", 5);
var railWayPath3 = new railWayPath(0, 0, 0, 0);
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "Silver";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    railWayPath3.drawVertical();
    railWayPath1.draw();
    railWayPath11.draw();
    railWayPath2.draw();
    railWayPath22.draw();
}
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    gameLoop();
};
// Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.
// Tip: Use the stroke() method to actually draw the path on the canvas.
