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
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export const Checkout = () => {
  const { coffees } = useContext(CoffeesContext)

  console.log(coffees)

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
                <input type="number" placeholder="CEP" />
                <input type="text" placeholder="Rua" />
              </CEPAndStreetContainer>
              <NumberAndComplementContainer>
                <input type="number" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </NumberAndComplementContainer>
              <LastContainer>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
                <QuantidadeItem />
                <RemoveButton>
                  <Trash size={16} weight="regular" />
                  <p>REMOVER</p>
                </RemoveButton>
              </ButtonsCoffeeItem>
            </PreviewCoffeeItemContainer>
            <strong>R${coffees[2].preco}</strong>
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
                <QuantidadeItem />
                <RemoveButton>
                  <Trash size={16} weight="regular" />
                  <p>REMOVER</p>
                </RemoveButton>
              </ButtonsCoffeeItem>
            </PreviewCoffeeItemContainer>
            <strong>R${coffees[0].preco}</strong>
          </PreviewCoffeeItem>
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
