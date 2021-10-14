import {mmToPx, inToPx} from './numberConverter'
const landscapeBoxDraw = (canvasRef, x, y, boxWidthPx, boxHeightPx, boxLenghtPx, boxPesting) => {
    const myCanvas = canvasRef.current
    const c = myCanvas.getContext("2d")
    // Body 01
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxHeightPx, boxLenghtPx)
    c.stroke();
    c.closePath()

    // Left Lock 1
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(((x - 50)/2 ) + 50, y,  (x - 50)/2, boxLenghtPx)
    c.stroke();
    c.closePath()
    
    // Right Lock 1
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x + boxHeightPx, y,  (x - 50)/2, boxLenghtPx)
    c.stroke();
    c.closePath()

    y+= boxLenghtPx

    // Body 02
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxHeightPx, boxWidthPx)
    c.stroke();
    c.closePath()

    // Right Lock 2
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x + boxHeightPx, y,  boxLenghtPx, boxWidthPx)
    c.stroke();
    c.closePath()

    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x + boxHeightPx + boxLenghtPx, y, boxPesting,  boxWidthPx)
    c.stroke();
    c.closePath()

    y+= boxWidthPx

    // Body 03
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxHeightPx, boxLenghtPx)
    c.stroke();
    c.closePath()

    // Left Lock 2
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(((x - 50)/2 ) + 50, y,  (x - 50)/2, boxLenghtPx)
    c.stroke();
    c.closePath()
    
    // Right Lock 3
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x + boxHeightPx, y,  (x - 50)/2, boxLenghtPx)
    c.stroke();
    c.closePath()

    y+= boxLenghtPx

    // Body 04
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxHeightPx, boxWidthPx)
    c.stroke();
    c.closePath()

    // Right Lock 2
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x - boxLenghtPx, y,  boxLenghtPx, boxWidthPx)
    c.stroke();
    c.closePath()

    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x - boxLenghtPx - boxPesting, y, boxPesting,  boxWidthPx)
    c.stroke();
    c.closePath()

    y+= boxWidthPx
    
    // Pesting
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxHeightPx, inToPx(.4))
    c.stroke();
    c.closePath()

  }
  export default landscapeBoxDraw;



//   // Festing
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x +  inToPx(0.1), y, inToPx(0.4), boxHeightPx)
//   c.stroke();
//   c.closePath()

//   x +=boxPesting

//   // Top Lock
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, y - boxLenghtPx, boxWidthPx, boxLenghtPx)
//   c.stroke();
//   c.closePath()

//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, y - ((boxLenghtPx) + (boxPesting)), boxWidthPx,  boxPesting)
//   c.stroke();
//   c.closePath()

//   // Body 01
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, y, boxWidthPx, boxHeightPx)
//   c.stroke();
//   c.closePath()
  

//   x += boxWidthPx

//   // Top Lock 2
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, (y - 50)/2 + 50, boxLenghtPx,  (y - 50)/2)
//   c.stroke();
//   c.closePath()

//   // Body 02
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, y, boxLenghtPx, boxHeightPx)
//   c.stroke();
//   c.closePath()

//   // Bottom Lock 1
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, ((y + 50)+boxHeightPx)-50, boxLenghtPx,  (y - 50)/2)
//   c.stroke();
//   c.closePath()

//   x+=boxLenghtPx

//   // Body 03
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, y, boxWidthPx, boxHeightPx)
//   c.stroke();
//   c.closePath()

//   // Bottom Lock 3
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, y + boxHeightPx, boxWidthPx, boxLenghtPx)
//   c.stroke();
//   c.closePath()

//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, y + boxHeightPx + boxLenghtPx, boxWidthPx, boxPesting)
//   c.stroke();
//   c.closePath()

//   x+=boxWidthPx



//   // Body 04
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, y, boxLenghtPx, boxHeightPx)
//   c.stroke();
//   c.closePath()

//   // Bottom Lock 1
//   c.beginPath()
//   c.fillStyle = "Black";
//   c.rect(x, ((y + 50)+boxHeightPx)-50, boxLenghtPx,  (y - 50)/2)
//   c.stroke();
//   c.closePath()