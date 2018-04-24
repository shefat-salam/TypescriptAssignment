var canvas;
var ctx;
var railWayPath = /** @class */ (function () {
    function railWayPath(a, b, x, y, color, linewidth) {
        if (color === void 0) { color = 'white'; }
        if (linewidth === void 0) { linewidth = 5; }
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
                ctx.strokeStyle = "#808000";
                ctx.lineWidth = _this.lineWidth;
                ctx.moveTo(i, 430);
                ctx.lineTo(i, 280);
                ctx.stroke();
                ctx.lineCap = 'round';
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
// for (let i:number = 80; i < 1280; i += 80){
//     ctx.beginPath();
//     ctx.strokeStyle = "#808000";
//     ctx.lineWidth = 5;
//     ctx.moveTo(i, 430);
//     ctx.lineTo(i,280);
//     ctx.stroke();
// }
var railWayPath1 = new railWayPath(0, 400, 1280, 400);
var railWayPath2 = new railWayPath(0, 300, 1280, 300);
var railWayPath3 = new railWayPath(0, 0, 0, 0);
// var railWayPath3: railWayPath = new railWayPath( 80, 430, 80, 280, "#808000");
// var railWayPath4: railWayPath = new railWayPath(160, 430, 160, 280, "#808000");
// var railWayPath5: railWayPath = new railWayPath(240, 430, 240, 280, "#808000");
// var railWayPath6: railWayPath = new railWayPath(320, 430, 320, 280,  "#808000");
// var railWayPath7: railWayPath = new railWayPath(400, 430, 400, 280, "#808000");
// var railWayPath8: railWayPath = new railWayPath(480, 430, 480, 280, "#808000");
// var railWayPath9: railWayPath = new railWayPath(560, 430, 560, 280,  "#808000");
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    railWayPath1.draw();
    railWayPath2.draw();
    railWayPath3.drawVertical();
    //    railWayPath4.draw();
    //    railWayPath5.draw();
    //    railWayPath6.draw();
    //    railWayPath7.draw();
    //    railWayPath8.draw();
    //    railWayPath9.draw();
}
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    gameLoop();
};
// Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.
// Tip: Use the stroke() method to actually draw the path on the canvas.
