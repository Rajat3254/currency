import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [len, setlen] = useState(8)
  const [numA,setNumA]=useState(false);
  const [charA,setCharA]=useState(false);
  const [upperCharA,setUpperCharA]=useState(false);
  const [password,setPassword]=useState("");
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyz"
    if(upperCharA) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numA) str+="0123456789"
    if(charA) str+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    for (let i=0;i<len;i++) {
      let ch=Math.floor(Math.random()*str.length);
      pass+=str.charAt(ch);
    }
    setPassword(pass);
  },[charA,numA,len,setPassword,upperCharA])

  // usecallback me ham optimization ki baat karte hai means if there is change in the dependencices then the function get called again but in such a way that it takes optimal time

  const passwordRef=useRef(null)
  useEffect(()=>{
    passwordGenerator()
  },[len,numA,charA,upperCharA,passwordGenerator])

  // useEffect is used to call the function if there is a change in the given dependencies
  return (
    <>
      <div className='text-center text-slate-100 text-4xl font-semibold px-4 py-2'>Password Generator</div>

<div className='mx-auto mt-4 bg-slate-700 rounded-lg px-6 py-4 w-full max-w-max flex flex-col justify-center'>
    <div className='flex'>
    <input 
      type="text"
      className="px-4 py-2 border-2 rounded-s-lg text-orange-600 bg-gray-100 focus:outline-none w-64 h-10" 
      value={password}
      placeholder="Password"
      ref={passwordRef}
      readOnly
    />  
    <button className='px-4 py-2 bg-cyan-700 h-10 rounded-e-lg' onClick={()=>{
      passwordRef.current?.select()
      navigator.clipboard.writeText(password)}
    }>Copy</button>
    </div>
    <div className='flex flex-col mt-5 gap-2'>
    <div className='flex gap-3'>
    <input 
    type="range"
    min={6}
    max={24}
    value={len}
    className='cursor w-60'
    onChange={(e)=>{setlen(e.target.value)}}
    />
    <label  className='text-lg'> length: {len}</label>
    </div>
    <div className='flex gap-3'>
      <input 
      type="checkbox"
      defaultChecked={numA}
      onChange={()=>{
        setNumA((prev)=>!prev);
      }}
      />
      <label htmlFor=""  className='text-lg'>Contains Numbers</label>
    </div>
    <div className='flex gap-3'>
      <input 
      type="checkbox"
      defaultChecked={charA}
      onChange={()=>{
        setCharA((prev)=>!prev);
      }}
      />
      <label htmlFor="" className='text-lg'>Contains Special Character</label>
    </div>
    <div className='flex gap-3'>
      <input 
      type="checkbox"
      defaultChecked={upperCharA}
      onChange={()=>{
        setUpperCharA((prev)=>!prev);
      }}
      />
      <label htmlFor="" className='text-lg'>Contains Upper Case Character</label>
    </div>
  </div>
  </div>
  
    </>
  )
}

export default App
