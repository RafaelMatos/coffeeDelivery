import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
}
export function QuantityInput({ size = 'medium' }: QuantityInputProps) {
  const [quantity, setQuantity] = useState(0)
  function handlePlus() {
    if (quantity < 10) {
      setQuantity(quantity + 1)
    }
  }
  function handleMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={handleMinus}>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={handlePlus}>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
