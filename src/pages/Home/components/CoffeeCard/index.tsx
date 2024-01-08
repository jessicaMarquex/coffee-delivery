import { ShoppingCart } from 'phosphor-react'
import {
  BoxTags,
  CoffeImg,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeType,
  Container,
  ContentFooter,
  ItemCard,
  Price,
  Tag,
} from './style'
import React, { useContext } from 'react'
import { QuantidadeItem } from '../../../components/QuantidadeItem/index.tsx'
import { CoffeesContext } from '../../../../contexts/CoffeesContext.tsx'

interface ICoffees {
  id: number
  nome: string
  descricao: string
  preco: number
  tags: Array<string>
  src: string
}

export const CoffeeCard: React.FC = () => {
  const { coffees, handleItemCounterModifier, itemCounts } =
    useContext(CoffeesContext)

  return (
    <Container>
      {coffees.map((coffee: ICoffees) => {
        const itemCount = itemCounts[coffee.id] || 0

        const updateItemCount = (action: 'increment' | 'decrement') => {
          handleItemCounterModifier(coffee.id, action)
        }

        const formatPrice = Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })

        return (
          <ItemCard key={coffee.id}>
            <CoffeImg src={coffee.src} alt={coffee.descricao} />
            <BoxTags>
              {coffee.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </BoxTags>

            <CoffeeType>{coffee.nome}</CoffeeType>
            <CoffeeDescription>{coffee.descricao}</CoffeeDescription>
            <CoffeeFooter>
              <Price>
                <p>
                  <span>{formatPrice.format(coffee.preco)}</span>
                </p>
              </Price>
              <ContentFooter>
                <QuantidadeItem count={itemCount} setCount={updateItemCount} />
                <div>
                  <ShoppingCart size={22} weight="fill" />
                </div>
              </ContentFooter>
            </CoffeeFooter>
          </ItemCard>
        )
      })}
    </Container>
  )
}
