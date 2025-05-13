import React from 'react'
import Button from './Button'

 const list=["All","Gaming","Songs","Live","Cricket","News","Valentines","Soccer","Tennis","Animals","Action"]

const Buttonlist = () => {
  return (
    <div className='flex'>
     {list.map((index)=>(
        <Button name={index}/>
     ))} 
    </div>
  )
}

export default Buttonlist
