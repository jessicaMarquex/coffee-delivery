import { Minus, Plus } from 'phosphor-react'
import { QtddCoffee } from './styles'
import { useState } from 'react'

export const QuantidadeItem = () => {
  const [count, setCount] = useState(0)

  const changeQtdd = (type: string) => {
    if (type === 'increment') {
      setCount((prev) => (prev += 1))
    } else if (type === 'decrement') {
      setCount((prev) => (prev -= 1))
    }
  }

  return (
    <QtddCoffee>
      <button type="button" onClick={() => changeQtdd('decrement')}>
        <Minus size={14} weight="bold" />
      </button>
      <p>{count <= 0 ? 0 : count}</p>
      <button type="button" onClick={() => changeQtdd('increment')}>
        <Plus size={14} weight="bold" />
      </button>
    </QtddCoffee>
  )
}
