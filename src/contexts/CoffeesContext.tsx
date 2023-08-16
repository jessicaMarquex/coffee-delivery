import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'

interface ICoffees {
  id: number
  nome: string
  descricao: string
  preco: number
  tags: Array<string>
  src: string
}

interface ICoffeesContext {
  coffees: ICoffees[]
  fetchCoffees: () => Promise<void>
  itemCounts: { [itemId: number]: number }
  handleItemCounterModifier: (itemId: number, type: string) => void
}

interface ICoffeesProvider {
  children: ReactNode
}

export const CoffeesContext = createContext({} as ICoffeesContext)

export function CoffeesProvider({ children }: ICoffeesProvider) {
  const [coffees, setCoffees] = useState<ICoffees[]>([])

  const fetchCoffees = useCallback(async () => {
    const response = await api.get('coffees')

    setCoffees(response.data)
  }, [])

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

  useEffect(() => {
    fetchCoffees()
  }, [fetchCoffees])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        fetchCoffees,
        itemCounts,
        handleItemCounterModifier,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
