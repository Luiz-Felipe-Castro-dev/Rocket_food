import {Container} from "./styles.js"


export function Input({title, ...rest}){
return(
  <Container>
    <h1>{title}</h1>
    <input {...rest}/>
  </Container>
)
}