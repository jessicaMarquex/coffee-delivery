import { Outlet } from 'react-router-dom'
import { Header, LocaleContainer, Navbar } from './style'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const DefaultLayout = () => {
  return (
    <>
      <Header>
        <a href="/">
          <img
            src={logo}
            alt="Logo da Coffee Delivery, uma imagem de copo roxo junto com o nome da empresa."
          />
        </a>
        <Navbar>
          <LocaleContainer>
            <MapPin size={22} weight="fill" />
            <p>Oi, somos de Sobral - CE 😊</p>
          </LocaleContainer>
          <a href="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </a>
        </Navbar>
      </Header>
      <Outlet />
    </>
  )
}
