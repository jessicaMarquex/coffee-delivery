import { Minus, Plus } from 'phosphor-react'
import { QtddCoffee } from './styles'
import { useState } from 'react'

export const QuantidadeItem = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((prev) => (prev += 1))
  }

  const decrementCount = () => {
    if (count <= 0) setCount(0)

    setCount((prev) => (prev -= 1))
  }

  return (
    <QtddCoffee>
      <button type="button" onClick={decrementCount}>
        <Minus size={14} weight="bold" />
      </button>
      <p>{count <= 0 ? 0 : count}</p>
      <button type="button" onClick={incrementCount}>
        <Plus size={14} weight="bold" />
      </button>
    </QtddCoffee>
  )
}
