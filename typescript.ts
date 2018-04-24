let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

interface iShape {
   x: number;
   y: number;
   a:number;
   b:number;
   color: string;
   lineWidth: number;
   draw(): void;
   drawVertical(): void;
}

class railWayPath implements iShape{
  public x: number = 0;
  public y: number = 0;
  public a: number = 0;
  public b: number = 0;
  public color: string = "red";
  public lineWidth: number = 5;

  constructor(a:number, b:number, x:number, y:number,  color:string = 'white', linewidth:number = 5 ){
      this.x = x;
      this.y = y;
      this.a = a;
      this.b = b;
      this.color = color;
      this.lineWidth = linewidth;
    
  }

  public draw = ():void =>{
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.moveTo(this.a, this.b);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
     ctx.lineCap = 'round';
    
  }
  public drawVertical = ():void =>{
      for (let i:number = 80; i < 1280; i += 80){
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = "#808000";
        ctx.lineWidth = this.lineWidth;
        ctx.moveTo(i, 430);
        ctx.lineTo(i, 280);
        ctx.stroke();
        ctx.lineCap = 'round';
      }
    
  }
}

var railWayPath1: railWayPath = new railWayPath(0, 400, 1280, 400 );
var railWayPath2: railWayPath = new railWayPath( 0, 300, 1280, 300);
var railWayPath3: railWayPath = new railWayPath( 0, 0, 0, 0);


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

window.onload = ():void => {
   canvas = <HTMLCanvasElement>document.getElementById('cnvs');
   ctx = canvas.getContext("2d");
   gameLoop();
}

// Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.

// Tip: Use the stroke() method to actually draw the path on the canvas.