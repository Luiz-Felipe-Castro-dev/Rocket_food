import {Container} from "./styles.js"

export function Ingredient({title,img, ...rest}){
  return(
    <Container
    {...rest}>
      <img src={img} alt="imagem do ingrediente" />
      <p>{title}</p>
    </Container>
  )
}