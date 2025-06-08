import { useState } from 'react'
import './Style/footer.css'

export const Footer = ({value, setValue}) => {

  const [subClick,setSubClick] = useState(1);
  const [delClick,setdelClick] = useState(1);

  const Submit = () => {
    setSubClick(subClick + 1);
    alert("You Click Submit ✅ \n You Click : " + subClick + " Times");
  }

  const Delete = () => {
    setdelClick(delClick + 1);
    alert("You Click Delete ❌ \n You Click : " + delClick + " Times");
  }
  
  return (
    <div className='footer'>
      <input type="text" maxLength={20} value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter your Name' />
      <button className="submit" onClick={Submit}>Submit</button>
      <button className="delete" onClick={Delete}>Delete</button>
      <h1>Your Entered Name : {value}</h1>
    </div>
  )
}