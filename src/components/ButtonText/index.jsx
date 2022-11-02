import {Container} from "./styles.js"

export function ButtonText({title,icon:Icon,...rest}){
return(
    <Container type="button"
    {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}