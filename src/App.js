import React, { useState } from 'react';
import './App.css';
import Liset from  './Liset'


function App() {
  const [inps,newinp]=useState("");
  const[Items,setItems] = useState([]);
  const Inputeve = (event) =>{
    newinp(event.target.value);
  };
  const listofItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems , inps];
    });
    newinp('');
  };
  const deleteitem = (id) =>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index) =>{
        return index!==id;
      });
    });
  };

  return (
    <div class="main_div">
    <div class="center_div">
      <br></br>
      <h1>ToDo List</h1>
      <br></br>
      <input type="text" onChange={Inputeve} placeholder="Add a Items" value={inps}></input>
      <button onClick={listofItems}>+</button>
     
      <ol>
      {
        Items.map( (itemval,index) => {
        return  <Liset text={itemval}
        key={index}
        id={index}
        onSelect={deleteitem} 
        ></Liset>
         
        })
        
      }
      </ol>
    </div>

    </div>
  
  );
}

export default App;
