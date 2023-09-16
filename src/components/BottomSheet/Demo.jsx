import React, { useState } from 'react'


const Demo = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <button onClick={() => setOpen(true)}>Open</button>
    </div>
  )
}

export default Demo