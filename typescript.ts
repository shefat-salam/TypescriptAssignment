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

  constructor(a:number, b:number, x:number, y:number,  color:string = 'Grey', linewidth:number = 10 ){
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
        ctx.strokeStyle = "DimGrey";
        ctx.lineWidth = 15;
        ctx.moveTo(i, 430);
        ctx.lineTo(i, 280);
        ctx.stroke();
        ctx.lineCap = 'round';
        for (let j:number = 80; j < 1280; j += 80){
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
  }
}

var railWayPath1: railWayPath = new railWayPath(0, 400, 1280, 400 );
var railWayPath11: railWayPath = new railWayPath(0, 407, 1280, 407,"black",5 );
var railWayPath2: railWayPath = new railWayPath( 0, 300, 1280, 300);
var railWayPath22: railWayPath = new railWayPath( 0, 307, 1280, 307,"black",5 );
var railWayPath3: railWayPath = new railWayPath( 0, 0, 0, 0);

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

window.onload = ():void => {
   canvas = <HTMLCanvasElement>document.getElementById('cnvs');
   ctx = canvas.getContext("2d");

   gameLoop();
}

// Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.

// Tip: Use the stroke() method to actually draw the path on the canvas.