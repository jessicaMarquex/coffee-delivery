import { ReactNode, createContext, useState } from 'react'
import coffees from '../../data.json'

interface ICoffee {
  id: number
  nome: string
  descricao: string
  preco: number
  tags: string[]
  src: string
}

interface ICoffeesContext {
  coffees: ICoffee[] // Agora é um array de ICoffee
  itemCounts: { [itemId: number]: number }
  handleItemCounterModifier: (
    itemId: number,
    type: 'increment' | 'decrement',
  ) => void
}

interface ICoffeesProvider {
  children: ReactNode
}

export const CoffeesContext = createContext({} as ICoffeesContext)

export function CoffeesProvider({ children }: ICoffeesProvider) {
  console.log(coffees)
  const [itemCounts, setItemCounts] = useState<{ [itemId: number]: number }>({})

  const handleItemCounterModifier = (itemId: number, action: string) => {
    setItemCounts((prevItemCounts) => {
      const currentCount = prevItemCounts[itemId] || 0

      switch (action) {
        case 'increment':
          return { ...prevItemCounts, [itemId]: currentCount + 1 }
        case 'decrement':
          if (currentCount <= 0) return prevItemCounts
          return { ...prevItemCounts, [itemId]: currentCount - 1 }
        default:
          return prevItemCounts
      }
    })
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        itemCounts,
        handleItemCounterModifier,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
