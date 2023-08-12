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

  useEffect(() => {
    fetchCoffees()
  }, [fetchCoffees])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        fetchCoffees,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
