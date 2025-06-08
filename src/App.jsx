import { useState, useEffect } from 'react';
import Header from "./Components/Header"
import CardArea from "./Components/CardArea"
import { Footer } from "./Components/Footer"

const App = () => {
  const [name, setName] = useState('');
  
  useEffect(() => {
    const store = localStorage.getItem('name');
    if(store){
      setName(store);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('name',name);
  },[name]);

  return(
    <>
      <Header myName={name} />
      <CardArea />
      <Footer value={name} setValue={setName} />
    </>
  )
}

export default App