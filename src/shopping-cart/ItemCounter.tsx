import { useState } from 'react'

interface Props {
  itemName: string
}
export const ItemCounter = ({itemName}: Props) => {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubtraction = () => {
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
