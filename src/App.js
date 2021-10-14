import {useRef, useState} from 'react'
import Input from './components/InputBox/Input'
import {mmToPx, inToPx} from './utilities/numberConverter'
import "tailwindcss/tailwind.css"
import portraitBoxDraw from './utilities/portraitBoxDraw'
import landscapeBoxDraw from './utilities/landscapeBoxDraw'
import resetCanvas from './utilities/resetCanvas'

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
    let BoxWidthPx = mmToPx(boxWidth)
    let BoxHeightPx = mmToPx(boxHeight)
    let boxLenghtPx = mmToPx(boxLength)
    const [boxHeightPx, boxWidthPx] = [BoxHeightPx, BoxWidthPx]
  const drawPortrait = () => {
    let x = 50;
    let y = 50 + mmToPx(boxLength) + boxPesting;
    portraitBoxDraw(canvasRef, x, y, boxWidthPx, boxHeightPx, boxLenghtPx, boxPesting)        
  }
  const drawLandscape = () => {
    let x = 50  + mmToPx(boxLength) + boxPesting;
    let y = 50;
    landscapeBoxDraw(canvasRef, x, y, boxWidthPx, boxHeightPx, boxLenghtPx, boxPesting)
  }
  const handleResetCanvas = () => {
    resetCanvas(canvasRef)
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
      <button onClick={drawLandscape}>Draw Landscape</button>
      <button onClick={drawPortrait}>Draw Portrait</button>
      <button onClick={handleResetCanvas}>Reset</button>
    </div>
  );
}

export default App;

// width={14 * 96 + "px"} height={22 * 96 + "px"}
