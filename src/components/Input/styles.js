import styled from "styled-components";



export const Container = styled.div`

border-radius:5px;
width: 100%;
margin-bottom: 37px;

>h1{
  color: ${({theme}) => theme.COLORS.GENERAL_TEXT};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif ;
}
>input{
  color:${({theme}) => theme.COLORS.ORDER_TITLE};
  background-color: transparent;

  border:1px solid #FFFFFF;
  height:56px;
  border-radius:5px;
  width: 100%;

  padding: 12px;

}
>input::placeholder{
  color:${({theme}) => theme.COLORS.INPUT_TEXT_PLACEHOLDER};
}

`;
