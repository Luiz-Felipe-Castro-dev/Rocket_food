import {Container} from "./styles.js"


export function Footer({...rest}){
  return(
    <Container>
      <div id="logo">
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/>
        </svg>
        <h2>food explorer</h2>
      </div>
      <p>© 2022 rights reserved</p>
    </Container>
  )
}