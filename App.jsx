import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductViewer from'./Tasks/ProductViewer';
function App() 
  {
    const [count,setCount]=useState(0);
    const [age,setAge]=useState(20);
    const [add,setAdd]=useState(1)
    const [input,setInput]=useState()
    const [color,setColor]=useState()
    const [name,setName]=useState(["Abhiram","Sai"])
    const [colors,setColors]=useState(["Red","Blue"])
    const handlecheck=()=>{
      setCount(count+1);
      setAdd((prevalue)=>prevalue+1);
      setAge(age+5);
  
    }
    return (
      <>
      <ProductViewer/>
      {/* <h1>Count:{count}</h1>
      <h1>Age:{age}</h1>
      <h1>Add:{add}</h1>
      <button onClick={handlecheck}>Click</button>
      <p>input:{input}</p>
      <input type="text" onChnage={(event)=>setInput(event.target.value)} /> <br />
      <h1 style={{color:color}}>color:{color}</h1>
      <input type="text" onChange={(event)=>setColor(event.target.value)} />
      {name.map((ele,index)=>{
          return(
            <>
            <h2 style={{color:colors[index]}}>{ele}</h2>
            </>
          )
        })
      } */}
      
      </>
    )
  }
  
  export default App;