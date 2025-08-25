import { useState } from 'react'

interface Props {
  itemName: string,
  quantity?: number
}
export const ItemCounter = ({itemName, quantity = 1}: Props) => {
  const [count, setCount] = useState(quantity)

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubtraction = () => {
    if(count == 0) return;

    setCount(count - 1);
  }
  return (
    <>
      <section style={
        {
          gap: '10px',
          marginTop : '10px',
          display: 'flex',
          alignItems: 'center'
        }
      }>
        <p style={{marginRight: '2px', marginLeft:'2px'}}> {itemName} </p>
        <button onClick={handleSubtraction}>-</button>
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>
      </section>
    </>
  )
}
