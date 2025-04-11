import React, { useState } from 'react'

const Form = ({onAddItem}) => {
  const [item,setItem] = useState('');
  const [quantity,setQuantity] = useState(1);

  function handleSubmit(e){
    e.preventDefault();

    const newItem = { item, quantity, packed: false, id: Date.now()};
    console.log(newItem);

    onAddItem(newItem);

    setItem('');
    setQuantity(1)
  }

    return(
        <form className='add-form' onSubmit={handleSubmit}>
          <h3>What do you need for your 😍 trip?</h3>
          <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))} required>
            {
              Array.from({length: 20}, (_,i)=> i + 1)
              .map((num)=>(
                <option key={num} value={num}>{num}</option>
              ))
            }
          </select>
          <input
            type='text'
            placeholder='Items...'
            value={item}
            onChange={(e)=> setItem(e.target.value)}
            required
          />
          <button>Add</button>
        </form>
      )
}

export default Form