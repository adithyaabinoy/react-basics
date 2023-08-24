import React from 'react'

const Button = ({name,type,onClick,color,bg}) => {
  return (
    <div>
     <button type={type} onClick={onClick} style={{color:color,backgroundColor:bg}}>{name}</button> 
    </div>
  )
}

export default Button
