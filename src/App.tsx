import React, { useState } from 'react'
import './App.css'

function App() {
  const [toShow, setToShow] = useState('inicio')

  return (
    <div className=" w-screen h-screen flex items-center justify-center">
    <div className='bg-white border rounded-xl h-2/3'>

    <div className={`flex flex-col h-full justify-around ${toShow === 'inicio' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Hola, ¿Tú me odias?</span>
      <img src="/snoopypy.jpg" alt="" className=' aspect-square rounded-md border w-1/2 self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      <button className='w-auto bg-green-500 hover:bg-green-400 rounded-md' onClick={()=>{setToShow('SnoopySad')}}>Sí</button>
      <button className='w-auto bg-red-600 hover:bg-red-400 rounded-md' onClick={()=>{setToShow('SnoopyLetter')}}>No</button>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'SnoopyLetter' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>¿Me amas?</span>
      <img src="/snoopyLetter.jpg" alt="" className=' aspect-square rounded-md border w-1/2 self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      <button className='w-auto bg-green-500 hover:bg-green-400 rounded-md' onClick={()=>{setToShow('SnoopyInLove')}}>Mucho</button>
      <button className='w-auto bg-red-600 hover:bg-red-400 rounded-md' onClick={()=>{setToShow('SnoopyCareless')}}>Nadita</button>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'SnoopyMad' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Te lo volveré a preguntar ¿Me odias?</span>
      <img src="/snoopymad.jpg" alt="" className=' aspect-square rounded-md border w-1/2 self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      <button className='w-auto bg-green-500 hover:bg-green-400 rounded-md' onClick={()=>{setToShow('SnoopyCareless')}}>Mucho</button>
      <button className='w-auto bg-red-600 hover:bg-red-400 rounded-md' onClick={()=>{setToShow('SnoopyLetter')}}>Era metira</button>
      </div>
      </div>

       <div className={`flex flex-col h-full justify-around ${toShow === 'SnoopyCareless' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>No me importa</span>
      <img src="/snoopycareless.jpg" alt="" className=' aspect-square rounded-md border w-1/2 self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'SnoopyInLove' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Yo más a ti</span>
      <img src="/SnoopyInLove.jpg" alt="" className='aspect-square rounded-md border self-center' />
      </div>

 <div className={`flex flex-col h-full justify-around ${toShow === 'SnoopySad' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>¿En serio me odias?</span>
      <img src="/snoopysad.jpg" alt="" className=' aspect-square rounded-md border w-1/2 self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      <button className='w-auto bg-green-500 hover:bg-green-400 rounded-md' onClick={()=>{setToShow('SnoopyMad')}}>Sí</button>
      <button className='w-auto bg-red-600 hover:bg-red-400 rounded-md' onClick={()=>{setToShow('SnoopyLetter')}}>No</button>
      </div>
      </div>

    </div>
    </div>
  )
}

export default App
