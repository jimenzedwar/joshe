import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [toShow, setToShow] = useState('inicio')
  useEffect(() => {
    toShow === 'pearlHappy' && setTimeout(() => {
      setToShow('shyPearl')
    }, 5000);
    toShow === 'shyPearl' && setTimeout(() => {
      setToShow('pearlkindasad')
    }, 5000);
    toShow === 'pearlkindasad' && setTimeout(() => {
      setToShow('pearlquestion')
    }, 5000);
    toShow === 'superHappyPearl' && setTimeout(() => {
      setToShow('pearlandsteven')
    }, 5000);
    toShow === 'pearlandsteven' && setTimeout(() => {
      setToShow('goodjoe')
    }, 5000);
    toShow === 'madPearl' && setTimeout(() => {
      setToShow('pearlquestion1')
    }, 5000);
     toShow === 'sadpearl' && setTimeout(() => {
      setToShow('reallysadpearl')
    }, 5000);
    toShow === 'reallysadpearl' && setTimeout(() => {
      setToShow('rreallysadpearl')
    }, 5000);
    toShow === 'rreallysadpearl' && setTimeout(() => {
      setToShow('badjoe')
    }, 5000);
  }, [toShow])

  return (
    <div className=" w-screen h-screen flex items-center justify-center text-white">
    <div className='bg-purple-300/20 border-2 border-white rounded-xl h-10/12 w-full mx-3'>

    <div className={`grid w-full justify-items-center h-full ${toShow === 'inicio' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center text-white mt-4'>Reproducelo:3</span>
      <audio src="/lovelikeyou.mp3" loop controls className='px-3' onPlay={()=>
      {setTimeout(()=>{
        setToShow('pearlHappy');
      }, 2000);
      }}></audio>
    </div>

   

      <div className={`flex flex-col h-full justify-around ${toShow === 'pearlHappy' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Hola</span>
      <img src="/pearl-happy.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'shyPearl' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Perdón por estar tan raro</span>
      <img src="/shypearl.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>


      <div className={`flex flex-col h-full justify-around ${toShow === 'pearlkindasad' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Estoy siendo foquito bobo</span>
      <img src="/pearlkindasad.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'sadpearl' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Esta vez no fue error</span>
      <img src="/sadpearl.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>

        <div className={`flex flex-col h-full justify-around ${toShow === 'reallysadpearl' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Entiendo...</span>
      <img src="/reallysadpearl.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>

       <div className={`flex flex-col h-full justify-around ${toShow === 'rreallysadpearl' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Procederé a comerme mis gusanitos</span>
      <img src="/rreallysadpearl.gif" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'pearlquestion' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Aún así me quieres, ¿Verdad?</span>
      <img src="/questionpearl.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
         <button className='w-auto bg-green-500 hover:bg-green-400 rounded-md' onClick={()=>{setToShow('superHappyPearl')}}>Siempre</button>
      <button className='w-auto bg-red-600 hover:bg-red-400 rounded-md' onClick={()=>{setToShow('madPearl')}}>Não</button>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'pearlquestion1' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Aún así me quieres, ¿Verdad?</span>
      <img src="/questionpearl.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full flex justify-around text-white text-xl'>
      <button className='w-auto bg-green-500 hover:bg-green-400 rounded-md p-3' onClick={()=>{setToShow('superHappyPearl')}}>SIEMPRE</button>
      <button className='w-fit h-fit self-center bg-red-600 hover:bg-red-400 rounded-md' onClick={()=>{setToShow('sadpearl')}}>Não</button>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'superHappyPearl' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>LO SABÍA</span>
      <img src="/superhappypearl.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'pearlandsteven' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>{`Gracias por siempre estar<3`}</span>
      <img src="/pearlandsteven.jpg" alt="" className=' aspect-square rounded-md w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
      </div>
      </div>

      <div className={`flex flex-col h-full justify-around ${toShow === 'madPearl' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Te equivocaste por error, te dare otra oportunidad</span>
      <img src="/madpearl.jpg" alt="" className=' aspect-square rounded-md border w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
     
      </div>
      </div>

       <div className={`flex flex-col h-full justify-around ${toShow === 'badjoe' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Ahora tienes el telefono hackeado, no tenias que decir que no...</span>
      <img src="/joe.jpg" alt="" className=' aspect-square rounded-md border w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
     
      </div>
      </div>

       <div className={`flex flex-col h-full justify-around ${toShow === 'goodjoe' ? '' : 'hidden' }`}>
      <span className='text-3xl text-center'>Ahora tienes el telefono hackeado, recuerda que soy joe:3</span>
      <img src="/joe.jpg" alt="" className=' aspect-square rounded-md border w-full self-center' />
      <div className='w-full grid grid-cols-2 justify-center gap-4 px-4 text-white text-xl'>
     
      </div>
      </div>


    </div>
    </div>
  )
}

export default App
