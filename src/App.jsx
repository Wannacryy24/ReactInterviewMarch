import React, { useState } from 'react'
import ReactDOM from 'react-dom';


export default function App() {
  const [open , setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={()=>setIsOpen(true)}>Open</button>
      {
        open && <Modal onClose={()=>setIsOpen(false)}/>
      }
    </div>
  )
}

function Modal({onClose}){
  return ReactDOM.createPortal(
    <>
      <h1>THis is Portal</h1>
      <button onClick={onClose}>Close IT</button>
    </>,
    document.getElementById("portal-root")
  )
}