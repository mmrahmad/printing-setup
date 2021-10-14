import React from 'react'

export default function Input({label, type, name, palceHolder, value, changeHandler}) {
    return (
        <div>
           <label htmlFor={name}>{label}
               <input type={type} name={name} palceHolder={palceHolder} value={value} onChange={changeHandler} />
           </label>
        </div>
    )
}
