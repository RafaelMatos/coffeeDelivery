import { Input } from '../../../../components/Input'
import { AddressFormContainer } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input type="number" placeholder="CEP" className="cep" />
      <Input type="text" placeholder="Rua" className="street" />
      <Input type="number" placeholder="Número" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  )
}
