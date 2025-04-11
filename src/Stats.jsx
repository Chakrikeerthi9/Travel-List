import React from 'react'

const Stats = ({elements}) => {
  if(!elements.length){
    return(
      <footer className='stats'>
        <em>Start Adding some items to your packing list.</em>
      </footer>
    )
  }
  const totalItems = elements.length;
  const packedItems = elements.filter((item)=> item.packed === true).length;
  const packedPercentage = Math.round((packedItems / totalItems)* 100 || 0);
    return(
        <footer className='stats'>
          <em>💼 You have {totalItems} items on your list, and you already packed {packedItems} ({packedPercentage}%)</em>
        </footer>
      )
}

export default Stats;