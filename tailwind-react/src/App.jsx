import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        {/* we used this div to make the bar that contains the white bg if inset-x-0 was not their then the full white bar will be their  */}
      <div className='flex flex-wrap gap-3 bg-slate-50 px-5 rounded-2xl py-2'>
        <button onClick={()=>{setColor("red")}} className='px-5 rounded-xl py-2' style={{backgroundColor: "red"}}> Red </button>
        <button onClick={()=>{setColor("pink")}} className='px-5 rounded-xl py-2' style={{backgroundColor: "pink"}}> pink </button>
        <button onClick={()=>{setColor("blue")}} className='px-5 rounded-xl py-2' style={{backgroundColor: "blue"}}> blue </button>
      </div>
      </div>
     </div>
    </>
  )
}

export default App

// props ke help se ham diffrent values de sakte hai ek element ko
// props act as a parameter which is obeject so if you want to
// not use props.username you can do {username} and then use 
// directly the username
