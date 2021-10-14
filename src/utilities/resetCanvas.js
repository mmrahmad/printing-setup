import {mmToPx, inToPx} from './numberConverter'
const resetCanvas = (canvasRef) => {
    const myCanvas = canvasRef.current
    const c = myCanvas.getContext("2d")

    c.clearRect(0, 0, myCanvas.width, myCanvas.height)
  }
  export default resetCanvas;