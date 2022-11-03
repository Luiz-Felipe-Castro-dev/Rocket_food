import styled from "styled-components";

const media = {
  desktop: '@media(min-width:1000px)'
}
export const Container = styled.div`


min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
.buttons{
  display: flex;
  justify-content: space-between;
}
.buttons div{
  width: 30%;
}
>main{
  padding-inline: 20px;
  ${media.desktop}{

    padding-inline: 200px;
  }
}
>main h1{
  margin-block: 30px;
}
#add_ingredient_button{
  background-color: #FFFFFF1A;
  opacity: 0.8;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
}
`