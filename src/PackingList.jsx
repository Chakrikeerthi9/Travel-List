import React, { useState } from 'react'

const PackingList = ({elements, onDeleteItem, onToggle, onReset}) => {
  const [byFilter, setByFilter] = useState('quantity');
  let selectItem;

  if (byFilter === 'item') selectItem = elements;
  if (byFilter === 'quantity') selectItem = elements.slice().sort((a,b)=> b.quantity -a.quantity);
  if (byFilter === 'packed') selectItem = elements.slice().sort((a,b)=> a.packed - b.packed);
    return(
        <div className='list'>
        <ul>
          {
            selectItem.map((ele)=>(
              <li key={ele.id}>
                <input type='checkbox' onChange={()=> onToggle(ele.id)} />
                <span style={ele.packed ? {textDecoration: "line-through"} : {}}>{ele.item} - {ele.quantity}</span>
                <button onClick={()=> onDeleteItem(ele.id)}>❌</button>
              </li>
            ))
          }
        </ul>

        <div>
          <select value={byFilter} onChange={(e)=> setByFilter(e.target.value)}>
            <option value="item">Select By Item</option>
            <option value="quantity">Select By Quantity</option>
            <option value="packed">Select By Packed</option>
          </select>
          <button onClick={()=> onReset()}>Reset</button>
        </div>
      </div>
      )
}

export default PackingList