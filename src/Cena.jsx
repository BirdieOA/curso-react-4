import React from 'react'


function Cena({nombre, precio, color, setTotal}) {
    const ruta="http://www.html6.es/img/rey_"
    const imagen=`${ruta}${nombre.toLowerCase()}.png`
    const comprar=(element)=>{
      setTotal((e)=> e+precio)
      element.target.parentNode.parentNode.parentNode.style.display="none"
    }
    
  return (
    
      <>
      <div className='rey' style={{backgroundColor:color}}>
        <h1>{nombre}</h1>
        <img src={imagen} alt="" />
        <div className='titulo'>Precio:</div>
        <div className='precio'>{precio}$
        <div>
          <button onClick={comprar}>Comprar</button>
        </div>
        </div>
      </div>
      </>
   
  )
}

export default Cena
