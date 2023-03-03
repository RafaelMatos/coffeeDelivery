import {
  ShoppingCart,
  Coffee,
  Package,
  Clock,
  IconContext,
} from 'phosphor-react'
import {
  Item,
  ItemContainer,
  RowItem,
  TextInfoContainer,
  TitleContainer,
} from './styles'

export function InfoItens() {
  return (
    <IconContext.Provider
      value={{
        color: 'white',
        size: 24,
        weight: 'fill',
        mirrored: false,
      }}
    >
      <TextInfoContainer>
        <TitleContainer>
          <p>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          </p>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>
        <ItemContainer>
          <RowItem>
            <Item backgroundColor="darkOrange">
              <div>
                <ShoppingCart />
              </div>
              Compra simples e segura
            </Item>
            <Item backgroundColor="gray">
              <div>
                <Package />
              </div>
              Embalagem mantém o café intacto
            </Item>
          </RowItem>
          <RowItem>
            <Item backgroundColor="orange">
              <div>
                <Clock />
              </div>
              Entrega rápida e rastreada
            </Item>
            <Item backgroundColor="purple">
              <div>
                <Coffee />
              </div>
              O café chega fresquinho até você
            </Item>
          </RowItem>
        </ItemContainer>
      </TextInfoContainer>
    </IconContext.Provider>
  )
}
