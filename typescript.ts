let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

interface iShape {
   x: number;
   y: number;
   color: string;
   lineWidth: number;
   draw(): void;
}

class railWayPath implements iShape{
  public x: number = 0;
  public y: number = 0;
  public color: string = "red";
  public lineWidth: number = 2;
  public radius: number = 10;
  
  constructor(x:number, y:number, radius:number = 2, color:string = 'white', linewidth:number = 2 ){
      this.x=x;
      this.y=y;
      this.color=color;
      this.lineWidth = linewidth;
      this.radius = radius;
  }

  public draw = ():void =>{
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
  }
}


var railWayPath1: railWayPath = new railWayPath(200, 300, 50);
var railWayPath2: railWayPath = new railWayPath(400, 550, 150, "blue", 5);

function gameLoop() {
   requestAnimationFrame(gameLoop);
   ctx.fillStyle = "black";
   ctx.fillRect(0, 0, 1280, 720);
   railWayPath1.draw();
   railWayPath2.draw();
}

window.onload = ():void => {
   canvas = <HTMLCanvasElement>document.getElementById('cnvs');
   ctx = canvas.getContext("2d");
   gameLoop();
}

// Use moveTo(), lineTo(), quadricCurveTo(), bezierCurveTo(), arcTo(), and arc(), to create paths.

// Tip: Use the stroke() method to actually draw the path on the canvas.