import styled from "styled-components";

export const Container = styled.div`

.card{
  width: 300px;
  height: 512px;
  border-radius: 8px;

  padding: 28px;

  background-color: #00000052;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;


}
>.card img{
  width: 176px;
  height: 176px;

}
>.card h1{
  font-size: 24px;
}
>.card  .description{

}

>.card  .botaun{
  height: 48px;
}
>.card .price{
  color: ${({theme}) => theme.COLORS.PRICE_TEXT};
}
`