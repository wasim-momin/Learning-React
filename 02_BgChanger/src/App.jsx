import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#101828")

  return (
    <div className='text-white h-screen p-4 flex' style={{backgroundColor:color}}>
      <div className='fixed bottom-12 inset-x-0 px-2 flex justify-center'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
            <button
            onClick={()=>setColor('red')}
            className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor:'red'}}
            >
              Red
            </button>
            <button
            onClick={()=>setColor('yellow')}
            className="outline-none px-8 py-2 rounded-full text-black shadow-lg "
            style={{backgroundColor:'yellow'}}
            >
              Yellow
            </button>
            <button
            onClick={()=>setColor('blue')}
            className="outline-none px-8 py-2 rounded-full text-white shadow-lg"
            style={{backgroundColor:'blue'}}
            >
              Blue
            </button>
        </div>
      </div>
    </div>
  )

}

export default App
