import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [length, setLength] = useState(8)
  let [numbers, setNumbers] = useState(false)
  let [characters, setCharacters] = useState(false)
  let [password, setPassword]= useState()
  let [copy, setCopy]= useState(false)
  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{

    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let pass = ''

    if(numbers) str += '0123456789'
    if(characters) str += '"!@#$%^&*-_+=[]{}~`"'

    for(let i=0; i<length; i++){
      const char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numbers, characters, setPassword])


  useEffect(()=>{
    passwordGenerator()
  }, [numbers, characters, length, setPassword])

  const handleCopyClipboard = useCallback(()=>{
    window.navigator.clipboard?.writeText(password)
    passwordRef.current?.select()
    setCopy(true)
  },[password, copy])

  return (
    <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <button className={`outline-none  text-white px-3 py-0.5 shrink-0 cursor-pointer ${copy?'bg-green-700':'bg-blue-700'}`} onClick={handleCopyClipboard} >
          {copy?'Copied':'Copy'}
        </button>
      </div>
      <div className="flex text-sm gap-x-6">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            onChange={(e)=>setLength(e.target.value)}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 ml-10">
          <input
            type="checkbox"
           onChange={()=>setNumbers(prev=>!prev)}
            id="numberInput"
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            onChange={()=>setCharacters(prev=>!prev)}
            // checked={characters}
            // onChange={(e)=>(setCharacters(e.target.checked))}
            // onChange={()=>setCharacters((prev)=>{
            //   console.log('in onchange consol', !prev);
            //   return !prev
            // })}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
