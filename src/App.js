import {useRef, useState} from 'react'
import Input from './components/InputBox/Input'
import {mmToPx, inToPx} from './utilities/numberConverter'
import "tailwindcss/tailwind.css"
import portraitBoxDraw from './utilities/portraitBoxDraw'
import landscapeBoxDraw from './utilities/landscapeBoxDraw'
import resetCanvas from './utilities/resetCanvas'
import landscapeRactangle from './utilities/landscapeRactangle'

function App() {
  const canvasRef = useRef(null)
  const [paperWidth, setPaperWidth] = useState(0)
  const [paperHeight, setPaperHeight] = useState(0)
  const [boxWidth, setBoxWidth] = useState(0)
  const [boxHeight, setBoxHeight] = useState(0)
  const [boxLength, setBoxLength] = useState(0)
  const [sizeWidth, setSizeWidth] = useState(0)
  const [sizeHeight, setSizeHeight] = useState(0)
  const [boxPesting, setBoxPesting] = useState(inToPx(0.5))
  const [coutnToRight, setCoutnToRight] = useState(0)
  const [coutnToDown, setCoutnToDown] = useState(0)
  const [type, setType] = useState("paper")
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
    if(e.target.name === "sizeWidth"){
      setSizeWidth(e.target.value)
    }
    if(e.target.name === "sizeHeight"){
      setSizeHeight(e.target.value)
    }
  }
    let BoxWidthPx = mmToPx(boxWidth)
    let BoxHeightPx = mmToPx(boxHeight)
    let boxLenghtPx = mmToPx(boxLength)
    const [boxHeightPx, boxWidthPx] = [BoxHeightPx, BoxWidthPx]
  const drawPortrait = () => {
    if(type === "box"){
      let x = 50;
      let y = 50 + mmToPx(boxLength) + boxPesting;
      portraitBoxDraw(canvasRef, x, y, boxWidthPx, boxHeightPx, boxLenghtPx, boxPesting)
    }  else {
      let x = mmToPx(4);
      let y = mmToPx(4);
      let sizeWidthPx = mmToPx(sizeWidth)
      let sizeHeightPX = mmToPx(sizeHeight)
      for(let i = 0; i < 9999;){
        if(inToPx(paperWidth) >= (x + sizeHeightPX)){
          landscapeRactangle(canvasRef, x, y, sizeHeightPX, sizeWidthPx)
          x += (sizeHeightPX + mmToPx(4))
          setCoutnToRight(prevState => prevState + 1)
        }else if(inToPx(paperHeight) >= (y + sizeWidthPx)){
          x = mmToPx(4)
          y += (sizeWidthPx + mmToPx(4))
          landscapeRactangle(canvasRef, x, y, sizeHeightPX, sizeWidthPx)
          x += (sizeHeightPX + mmToPx(4))
          setCoutnToDown(prevState => prevState + 1)
        } else{
          console.log("Left to Right : " + coutnToRight + ", Top to Down: " + coutnToDown + ". Total : "+ coutnToRight + coutnToDown)
          break
        }
      }
    }    
  }
  const drawLandscape = () => {
    if(type === "box"){
      let x = 50  + mmToPx(boxLength) + boxPesting;
      let y = 50;
      landscapeBoxDraw(canvasRef, x, y, boxWidthPx, boxHeightPx, boxLenghtPx, boxPesting)
    } else{
      let x = mmToPx(4);
      let y = mmToPx(4);
      let sizeWidthPx = mmToPx(sizeWidth)
      let sizeHeightPX = mmToPx(sizeHeight)
      
      for(let i = 0; i < 9999;){
        for(let j = 0; j< 999;){
          landscapeRactangle(canvasRef, x, y, sizeWidthPx, sizeHeightPX)
          x += (sizeWidthPx + mmToPx(4))
          setCoutnToRight(prevState => prevState + 1)
          if(inToPx(paperWidth) <= (x + sizeWidthPx)){break}
        }
         for(let l = 0; l < 9999;){
              x = mmToPx(4)
              y += (sizeHeightPX + mmToPx(4))
              landscapeRactangle(canvasRef, x, y, sizeWidthPx, sizeHeightPX)
              x += (sizeWidthPx + mmToPx(4))
              setCoutnToDown(prevState => prevState + 1)
            if(inToPx(paperHeight) <= (y + sizeHeightPX)){break}
         }
      }
    }
  }
  const handleResetCanvas = () => {
    resetCanvas(canvasRef);
    setCoutnToRight(0);
    setCoutnToDown(0);
  }
  console.log(`Left to Right : ${coutnToRight}, Top to Down: ${ coutnToDown }. Total : ${ coutnToRight + coutnToDown}`)
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
        {type === "box" ? <>
          <Input label="Enter Box Width in mm" type="text" name="boxWidth" palceHolder="Enter Box Width" value={boxWidth} changeHandler={handleChange} />
          <Input label="Enter Box Height in mm" type="text" name="boxHeight" palceHolder="Enter Box Height" value={boxHeight} changeHandler={handleChange} />
          <Input label="Enter Box Lenght in mm" type="text" name="boxLength" palceHolder="Enter Box Lenght" value={boxLength} changeHandler={handleChange} />
        </>
        : <>
          <Input label="Enter Width in mm" type="text" name="sizeWidth" palceHolder="Enter Width" value={sizeWidth} changeHandler={handleChange} />
          <Input label="Enter Height in mm" type="text" name="sizeHeight" palceHolder="Enter Height" value={sizeHeight} changeHandler={handleChange} />
        </>}
      </form>
      <button onClick={drawLandscape}>Draw Landscape</button>
      <button onClick={drawPortrait}>Draw Portrait</button>
      <button onClick={handleResetCanvas}>Reset</button>
    </div>
  );
}

export default App;
