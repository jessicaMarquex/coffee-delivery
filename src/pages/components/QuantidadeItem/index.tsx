import { Minus, Plus } from 'phosphor-react'
import { QtddCoffee } from './styles'
interface QuantidadeItemProps {
  count: number
  setCount: () => void
}

export const QuantidadeItem = ({ count, setCount }: QuantidadeItemProps) => {
  return (
    <QtddCoffee>
      <button type="button" onClick={() => setCount('decrement')}>
        <Minus size={14} weight="bold" />
      </button>
      <p>{count <= 0 ? 0 : count}</p>
      <button type="button" onClick={() => setCount('increment')}>
        <Plus size={14} weight="bold" />
      </button>
    </QtddCoffee>
  )
}
