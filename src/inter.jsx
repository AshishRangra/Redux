import React, { useEffect, useState } from 'react'

const Inter = () => {
    const [val,setVal]=useState(0);
    useEffect(()=>{
        setVal(val+1)
    },[])
  return (
    <div>
{val}
    </div>
  )
}

export default Inter