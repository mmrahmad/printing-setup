import {useRef, useState} from 'react'
import Input from './components/InputBox/Input'
import {mmToPx, inToPx} from './utilities/numberConverter'
import "tailwindcss/tailwind.css"

function App() {
  const canvasRef = useRef(null)
  const [paperWidth, setPaperWidth] = useState(0)
  const [paperHeight, setPaperHeight] = useState(0)
  const [boxWidth, setBoxWidth] = useState(0)
  const [boxHeight, setBoxHeight] = useState(0)
  const [boxLength, setBoxLength] = useState(0)
  const [boxPesting, setBoxPesting] = useState(inToPx(0.5))
  const handleChange = (e) => {
    if(e.target.name === "paperWidth"){
      setPaperWidth(e.target.value)
    }
    if(e.target.name === "paperHeight"){
      setPaperHeight(e.target.value)
    }
    if(e.target.name === "boxWidth"){
      setBoxWidth(e.target.value)
    }
    if(e.target.name === "boxHeight"){
      setBoxHeight(e.target.value)
    }
    if(e.target.name === "boxLength"){
      setBoxLength(e.target.value)
    }
  }
  const handleCanvas = () => {
    const myCanvas = canvasRef.current
    const c = myCanvas.getContext("2d")
    let x = 50;
    let y = 50 + mmToPx(boxLength) + boxPesting;

    let boxWidthPx = mmToPx(boxWidth)
    let boxHeightPx = mmToPx(boxHeight)
    let boxLenghtPx = mmToPx(boxLength)

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

  return (
    <div >
      <form>
        <div className="flex">
          <Input label="Enter Paper width in inch" type="text" name="paperWidth" palceHolder="Enter Paper width" value={paperWidth} changeHandler={handleChange} />
          <Input label="Enter Paper Height in inch" type="text" name="paperHeight" palceHolder="Enter Paper Height" value={paperHeight} changeHandler={handleChange} />
        </div>
      </form>
      <canvas ref={canvasRef} width={inToPx(paperWidth)+"px"} height={inToPx(paperHeight)+"px"} style={{border: "1px solid #000000"}}></canvas>
      <form>
        <Input label="Enter Box Width in mm" type="text" name="boxWidth" palceHolder="Enter Box Width" value={boxWidth} changeHandler={handleChange} />
        <Input label="Enter Box Height in mm" type="text" name="boxHeight" palceHolder="Enter Box Height" value={boxHeight} changeHandler={handleChange} />
        <Input label="Enter Box Lenght in mm" type="text" name="boxLength" palceHolder="Enter Box Lenght" value={boxLength} changeHandler={handleChange} />
      </form>
      <button onClick={handleCanvas}>Genarate Canvas</button>
    </div>
  );
}

export default App;

// width={14 * 96 + "px"} height={22 * 96 + "px"}
