import logoCoffee from '../../../../assets/coffeeIntro.svg'
import { InfoItens } from './InfoItens'
import { IntroContainer } from './styles'
export function IntroItens() {
  return (
    <IntroContainer>
      <InfoItens />
      <img src={logoCoffee} alt="" />
    </IntroContainer>
  )
}
