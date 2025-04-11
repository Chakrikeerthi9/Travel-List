import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const App = () => {

  const [elements,setElements] = useState([]);

  function handleAddItem(newItem){
    setElements((elements)=> [...elements,newItem])
    console.log(elements)
  };

  function handleDeleteItem(id){
    setElements((elements)=> elements.filter((item)=> item.id !== id))
  }

  function handleToggle(id){
    setElements((elements)=> elements.map((item)=> item.id === id ? {...item,packed: !item.packed} : item))
  }

  function handleReset(){
    setElements([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem = {handleAddItem} />
      <PackingList 
        elements ={elements} 
        onDeleteItem = {handleDeleteItem}
        onToggle = {handleToggle}
        onReset = {handleReset}
        />
      <Stats elements={elements} />
    </div>
  )
}

export default App
