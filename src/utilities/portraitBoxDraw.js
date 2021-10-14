import {mmToPx, inToPx} from './numberConverter'
const portraitBoxDraw = (canvasRef, x, y, boxWidthPx, boxHeightPx, boxLenghtPx, boxPesting) => {
    const myCanvas = canvasRef.current
    const c = myCanvas.getContext("2d")
    // Festing
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x +  inToPx(0.1), y, inToPx(0.4), boxHeightPx)
    c.stroke();
    c.closePath()

    x +=boxPesting

    // Top Lock
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y - boxLenghtPx, boxWidthPx, boxLenghtPx)
    c.stroke();
    c.closePath()

    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y - ((boxLenghtPx) + (boxPesting)), boxWidthPx,  boxPesting)
    c.stroke();
    c.closePath()

    // Body 01
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxWidthPx, boxHeightPx)
    c.stroke();
    c.closePath()
    

    x += boxWidthPx

    // Top Lock 2
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, (y - 50)/2 + 50, boxLenghtPx,  (y - 50)/2)
    c.stroke();
    c.closePath()

    // Body 02
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxLenghtPx, boxHeightPx)
    c.stroke();
    c.closePath()

    // Bottom Lock 1
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, ((y + 50)+boxHeightPx)-50, boxLenghtPx,  (y - 50)/2)
    c.stroke();
    c.closePath()

    x+=boxLenghtPx

    // Body 03
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxWidthPx, boxHeightPx)
    c.stroke();
    c.closePath()

    // Bottom Lock 3
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y + boxHeightPx, boxWidthPx, boxLenghtPx)
    c.stroke();
    c.closePath()

    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y + boxHeightPx + boxLenghtPx, boxWidthPx, boxPesting)
    c.stroke();
    c.closePath()

    x+=boxWidthPx

    // Top Lock 3
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, (y - 50)/2 + 50, boxLenghtPx,  (y - 50)/2)
    c.stroke();
    c.closePath()

    // Body 04
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, y, boxLenghtPx, boxHeightPx)
    c.stroke();
    c.closePath()

    // Bottom Lock 1
    c.beginPath()
    c.fillStyle = "Black";
    c.rect(x, ((y + 50)+boxHeightPx)-50, boxLenghtPx,  (y - 50)/2)
    c.stroke();
    c.closePath()
  }
  export default portraitBoxDraw;