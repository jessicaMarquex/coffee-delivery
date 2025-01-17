import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const MainContainer = styled.main`
  margin: 2.5rem 0;
  display: grid;
  grid-template-columns: 70% 30%;
  width: 100%;
  gap: 2rem;
`

export const FormContainer = styled.div`
  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.938rem;
  }

  form {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input,
    select {
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['base-button']};
      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};
    }
    input,
    select:valid {
      color: ${(props) => props.theme['base-text']};
    }
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: none;
    padding-right: 20px;
    background-image: url('');
    cursor: pointer;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  gap: 0.5rem;
  min-width: 640px;
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};

  div p:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Content = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`

export const CEPAndStreetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input:first-child {
    max-width: 12.5rem;
  }
`

export const NumberAndComplementContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  input[type='number'] {
    flex-grow: 200px;
  }

  input[type='text'] {
    flex-grow: 16;
  }
`

export const LastContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  input:nth-child(2) {
    flex-grow: 16;
  }
  input:nth-child(3) {
    max-width: 60px;
  }
`

export const PreviewContainer = styled.div`
  flex-grow: 1;
  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.938rem;
  }
`

export const PreviewContent = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`
export const PreviewCoffeeItem = styled.div`
  display: flex;
  gap: 0.5rem;
  strong {
    color: ${(props) => props.theme['base-text']};
  }
`
export const PreviewCoffeeItemContainer = styled.div`
  width: 100%;
`

export const ButtonsCoffeeItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 2rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 0.375rem;
  padding: 0 0.5rem;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  p {
    font-size: 0.75rem;
  }

  svg {
    color: ${(props) => props.theme['purple-normal']};
    transition: background-color 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const ImageCoffee = styled.img`
  width: 4rem;
  height: 4rem;
`
export const CoffeeDetails = styled.div`
  justify-content: space-between;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const PreviewFooter = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    padding-bottom: 0.75rem;
  }

  div:nth-child(3) {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 1.5rem;
  }

  button {
    display: flex;
    width: 100%;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-normal']};
    color: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in;
  }

  button:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentInfoContainer = styled.div`
  margin-top: 0.75rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`
export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-normal']};
    width: 1.375rem;
    height: 1.375rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const TransactionTypeButton = styled(RadioGroup.Item)`
  background: ${(props) => props.theme['base-button']};
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['base-subtitle']};
  svg {
    color: ${(props) => props.theme['purple-normal']};
  }
  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['purple-light']};
  }
  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-light']};
    &:focus {
      outline: 1px solid ${(props) => props.theme['purple-normal']};
    }
  }
`
