import React, { useEffect, useState } from 'react'
import { getApi , getPersonaje } from './funciones'
import './index.css'


const App = ()=>{

  const [url, seturl] = useState(`https://rickandmortyapi.com/api/character/?page=1`)

  const [siguiente, setsiguiente] = useState(null)
  const [anterior, setanterior] = useState(null)
  const [paginas, setpaginas] = useState(null)
  const [total, settotal] = useState(null)
  const [personajes, setpersonajes] = useState(null)
  const [personaje, setpersonaje] = useState(null)

  const handlePrev = (url)=>{
    seturl(url)
  }
  const handleNext = (url)=>{
    seturl(url)
  }


  useEffect( ()=>{
    getApi(url,setsiguiente,setanterior,setpaginas,settotal,setpersonajes)
  },[url])  //CUANDO CAMBIE LA URL VUELVE A LLAMAR LA PETICION

  return (
    <div className='contenedor'>


      <div className='header'>
        <h2> App Rick AND Morty API</h2>
        <p>Total de personajes {total}</p>
        <p>Cantidad de paginas {paginas}</p>
        {anterior!= null ? (<button onClick={()=>handlePrev(anterior)}>PREV</button>):('')}
        {siguiente!= null ? (<button onClick={()=>handleNext(siguiente)}>NEXT</button>):('')}

         <div> 
         { personajes!=null ? (
           personajes.map(pers => (
                                  <p key={pers.id}
                                  onClick={()=>{getPersonaje(pers.id,setpersonaje)}}>{pers.name}</p>))
         ):('')
      
         }
    
       </div>  

      </div>
       <div className='personaje'>
         {
           personaje != null ? (
             <div>
          
               <img src={personaje.image} alt="" />
             </div>
           ):('')
         }
       </div>

    </div>
  )
}


export default App










