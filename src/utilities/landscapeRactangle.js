import {mmToPx, inToPx} from './numberConverter'
const landscapeRactangle = (canvasRef, x, y, sizeWidth, sizeHeight) => {
    const myCanvas = canvasRef.current
    const c = myCanvas.getContext("2d")
    // Body 01
    c.beginPath()
    c.fillStyle = "#ADD8E6";
    c.rect(x, y, sizeWidth, sizeHeight)
    c.fill()
    c.stroke();
    c.closePath()
  }
  export default landscapeRactangle;