import styled from "styled-components";


const media = {
  desktop: '@media(min-width:1000px)'
}

export const Container = styled.div`
width: 100vw;

min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
${media.desktop}{
  
}
>main{
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.desktop}{
    padding: unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
  
  }
  >img{
    width: 90%;
    ${media.desktop}{
  
      width: 390px;
      object-fit: cover;
      
}
  }
  
  >.right{

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    height: 500px;
    
  }
  >.right .include{
    display: flex;
    align-items: center;
    width: 300px;
    justify-content: space-between;
  }
  >.right .price{
    color: ${({theme}) => theme.COLORS.PRICE_TEXT};
  }
  >.right #incluir{
    width: 150px;
  }
  >.right #ingredients{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
}

`