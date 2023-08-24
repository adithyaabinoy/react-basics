import React from 'react'

const Button = ({name,type,onClick,color}) => {
  return (
    <div>
     <button type={type} onClick={onClick} style={{color:color}}>{name}</button> 
    </div>
  )
}

export default Button
