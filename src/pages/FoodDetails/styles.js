import styled from "styled-components";

export const Container = styled.div`
width: 100vw;

min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
>main{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  >img{
    
    width: 390px;
    object-fit: cover;
    
  }
  
  >.right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    /* align-items: baseline; */
    height: 500px;
    
  }
  >.right .price{
    color: ${({theme}) => theme.COLORS.PRICE_TEXT};
  }
  >.right #ingredients{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
}

`