import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import logoCoffee from '../../assets/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Location" className={'location'}>
          <MapPin size={24} />
          Location
        </NavLink>
        <NavLink to="/kart" title="Cart" className={'cart'}>
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
