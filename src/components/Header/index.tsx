import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import logoCoffee from '../../assets/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffee} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={24} weight="fill" />
            Location, UF
          </HeaderButton>
          <HeaderButton variant="orange">
            <ShoppingCart size={24} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
        {/* <nav>
          <NavLink to="/" title="Location" className={'location'}>
            <MapPin size={24} />
            Location
          </NavLink>
          <NavLink to="/kart" title="Cart" className={'cart'}>
            <ShoppingCart size={24} />
          </NavLink>
        </nav> */}
      </div>
    </HeaderContainer>
  )
}
