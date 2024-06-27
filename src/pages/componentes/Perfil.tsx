import React from 'react'

interface Props {//esto es para dar el tipo de datos a los argunmentos dentro del perfil
    nombre:string,
    apellido:string,
    edad:number,
    rol?: "estudiante"|"docente"// cuando lleva el signo ? quiere decir que es opcional pero la idea es de colocarlo dentro de perfi 
}
export const Perfil = (props:Props) => {
  return (//aqui uno puede ir utilizando los interface de props
    <>
      <h1>Perfil</h1>
      <p>Nombre:{props.nombre}</p>
      <p>Apellido:{props.apellido}</p>
      <p>Edad:{props.edad}</p>
      {props.edad > 18 && <p>si es mayor de edad</p>}
      {props.rol!=undefined && 
        <p>Eres: {props.rol}</p> &&
        props.rol == "docente" &&
        <ul>
            <li>Subir Notas</li>
            <li>Reprobar Alumnos</li>
            <li>Aprobar Alumnos</li>
        </ul>
        }
    </>
  )
}
export default Perfil

//los && sirve para que si no se cumpla o se cumpla las condiciones se ejecute o no algo 