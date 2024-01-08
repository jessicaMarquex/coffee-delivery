import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  ButtonsCoffeeItem,
  CEPAndStreetContainer,
  CoffeeDetails,
  Content,
  Divider,
  FormContainer,
  HeaderContent,
  ImageCoffee,
  LastContainer,
  MainContainer,
  NumberAndComplementContainer,
  PaymentInfoContainer,
  PreviewCoffeeItem,
  PreviewCoffeeItemContainer,
  PreviewContainer,
  PreviewContent,
  PreviewFooter,
  RemoveButton,
  TitleContainer,
  TransactionType,
  TransactionTypeButton,
} from './style'
import { QuantidadeItem } from '../components/QuantidadeItem'
import React, { useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import axios from 'axios'

export const Checkout: React.FC = () => {
  const { coffees } = useContext(CoffeesContext)
  const [ufs, setUfs] = useState<string[]>([])
  const [cep, setCep] = useState('')
  const [addressData, setAddressData] = useState({
    street: '',
    city: '',
    state: '',
    district: '',
  })

  const [itemCounts, setItemCounts] = useState<{ [itemId: number]: number }>({})

  const updateItemCount = (
    itemId: number,
    action: 'increment' | 'decrement',
  ) => {
    setItemCounts((prevItemCounts) => {
      const currentCount = prevItemCounts[itemId] || 0

      if (action === 'increment') {
        return { ...prevItemCounts, [itemId]: currentCount + 1 }
      } else if (action === 'decrement' && currentCount > 0) {
        return { ...prevItemCounts, [itemId]: currentCount - 1 }
      }

      return prevItemCounts
    })
  }

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        const ufNames = response.data.map((uf: any) => uf.sigla)
        setUfs(ufNames)
      })
      .catch((error) => {
        console.error('Erro ao buscar UFs:', error)
      })
  }, [])

  const formatCep = (cep: string) => {
    const cleanedCep = cep.replace(/\D/g, '')
    if (cleanedCep.length <= 5) {
      return cleanedCep
    }
    return `${cleanedCep.slice(0, 5)}-${cleanedCep.slice(5, 8)}`
  }

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value
    const cleanedCep = newCep.replace(/\D/g, '')
    setCep(cleanedCep)

    if (cleanedCep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${newCep}/json/`)
        .then((response) => {
          const data = response.data

          setAddressData({
            street: data.logradouro,
            city: data.localidade,
            state: data.uf,
            district: data.bairro,
          })
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do CEP:', error)
        })
    }
  }

  const formatPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return (
    <MainContainer>
      <div>
        <FormContainer>
          <h1>Complete seu pedido</h1>
          <form>
            <HeaderContent>
              <MapPinLine size={22} />
              <div>
                <p>Endereço de entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </HeaderContent>
            <Content>
              <CEPAndStreetContainer>
                <input
                  type="text"
                  placeholder="CEP"
                  value={formatCep(cep)}
                  onChange={handleCepChange}
                />
                <input
                  type="text"
                  placeholder="Rua"
                  value={addressData.street}
                />
              </CEPAndStreetContainer>
              <NumberAndComplementContainer>
                <input type="number" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </NumberAndComplementContainer>
              <LastContainer>
                <input
                  type="text"
                  placeholder="Bairro"
                  value={addressData.district}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  value={addressData.city}
                />
                <select name="uf" value={addressData.state}>
                  {' '}
                  <option value="">UF</option>
                  {ufs.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </LastContainer>
            </Content>
          </form>
        </FormContainer>
        <PaymentInfoContainer>
          <TitleContainer>
            <CurrencyDollar />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar:
              </p>
            </div>
          </TitleContainer>
          <TransactionType>
            <TransactionTypeButton value="credito">
              <CreditCard size={24} />
              CARTÃO DE CRÉDITO
            </TransactionTypeButton>
            <TransactionTypeButton value="debito">
              <Bank size={24} />
              CARTÃO DE DÉBITO
            </TransactionTypeButton>
            <TransactionTypeButton value="dinheiro">
              <Money size={24} />
              DINHEIRO
            </TransactionTypeButton>
          </TransactionType>
        </PaymentInfoContainer>
      </div>
      <PreviewContainer>
        <h1>Cafés selecionados</h1>
        <PreviewContent>
          {coffees.length > 0 ? (
            <>
              <PreviewCoffeeItem>
                <ImageCoffee
                  src={coffees[1].src}
                  alt={coffees[1].descricao}
                ></ImageCoffee>
                <PreviewCoffeeItemContainer>
                  <CoffeeDetails>
                    <p>{coffees[1].nome}</p>
                  </CoffeeDetails>
                  <ButtonsCoffeeItem>
                    <QuantidadeItem
                      count={itemCounts[coffees[0].id] || 0}
                      setCount={(action) =>
                        updateItemCount(coffees[0].id, action)
                      }
                    />
                    <RemoveButton>
                      <Trash size={16} weight="regular" />
                      <p>REMOVER</p>
                    </RemoveButton>
                  </ButtonsCoffeeItem>
                </PreviewCoffeeItemContainer>
                <strong>{formatPrice.format(coffees[2].preco)}</strong>
              </PreviewCoffeeItem>
              <Divider />
              <PreviewCoffeeItem>
                <ImageCoffee
                  src={coffees[0].src}
                  alt={coffees[0].descricao}
                ></ImageCoffee>
                <PreviewCoffeeItemContainer>
                  <CoffeeDetails>
                    <p>{coffees[0].nome}</p>
                  </CoffeeDetails>
                  <ButtonsCoffeeItem>
                    <QuantidadeItem
                      count={itemCounts[coffees[0].id] || 0}
                      setCount={(action) =>
                        updateItemCount(coffees[0].id, action)
                      }
                    />
                    <RemoveButton>
                      <Trash size={16} weight="regular" />
                      <p>REMOVER</p>
                    </RemoveButton>
                  </ButtonsCoffeeItem>
                </PreviewCoffeeItemContainer>
                <strong>{formatPrice.format(coffees[0].preco)}</strong>
              </PreviewCoffeeItem>
            </>
          ) : (
            <p>Nenhum café selecionado.</p>
          )}
          <Divider />
          <PreviewFooter>
            <div>
              <p>Total de itens</p>
              <p>R$ 14,22</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
            <button type="button">CONFIRMAR PERDIDO</button>
          </PreviewFooter>
        </PreviewContent>
      </PreviewContainer>
    </MainContainer>
  )
}
