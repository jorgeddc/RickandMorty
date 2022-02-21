
   export const getApi =async(url,setsiguiente,setanterior,setpaginas,settotal,setpersonajes)=>
    {
       
       const resp = await fetch(url);
       const {info , results} = await resp.json();
       setsiguiente(info.next);
       info.prev != null ? setanterior(info.prev):setanterior(null);
       setpaginas(info.pages);
       settotal(info.count);
       setpersonajes(results);
       
     }

   export const getPersonaje =async(id,setPersonaje)=>{

    const peticion = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
    const resultado = await peticion.json();
    setPersonaje(resultado)

    
     
   }


