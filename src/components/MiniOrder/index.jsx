import {Container} from "./styles.js"

export function MiniOrder({title,img,number,price, ...rest}){
  return(
    <Container {...rest}>
      <div className="flex">
        <img src={img} alt="Prato" />
        <div className="info">
          <h2>{number} x {title} <span>R${price}</span></h2>
          <p>Excluir</p>
        </div>
      </div>
    </Container>
  )
}