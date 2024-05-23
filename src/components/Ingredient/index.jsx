import { Container, Input } from "./styles";
import { FiPlus, FiX } from 'react-icons/fi'

export function Ingredient({title, disabled, onClick, ...rest}) {
  return (
    <Container $isDisabled = {disabled} {...rest}>
      {disabled ? (
        <>
          <Input type="text" value={title} disabled/>
          <FiX onClick={onClick}/>
        </>
      ) : ( 
        <>
          <Input type="text" value={title} placeholder="Adicionar"/>
          <FiPlus onClick={onClick}/>
        </>
      )}
    </Container>
  )
}