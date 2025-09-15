import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-150"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center top-10 inset-x-0">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-slate-100 rounded px-5 py-3">
            <button onClick={() => setColor("lightgreen")}
            className="outline-1 px-2 rounded" style={{backgroundColor: "lightgreen"}}>Light Green</button>

            <button onClick={() => setColor("grey")} className="outline-1 px-2 rounded" style={{backgroundColor: "grey"}}>Grey</button>

            <button onClick={() => setColor("purple")} className="outline-1 px-2 rounded" style={{backgroundColor: "purple"}}>Purple</button>

            <button onClick={() => setColor("yellow")} className="outline-1 px-2 rounded" style={{backgroundColor: "yellow"}}>Yellow</button>

            <button onClick={() => setColor("pink")} className="outline-1 px-2 rounded" style={{backgroundColor: "pink"}}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
