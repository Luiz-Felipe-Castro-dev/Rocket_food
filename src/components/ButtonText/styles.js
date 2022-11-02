import styled from "styled-components";

export const Container = styled.button`
border: none;
background: none;
color: ${({theme}) => theme.COLORS.ORDER_TITLE};

display: flex;
align-items: center;
justify-content: center;

gap: 4px;
>svg{
  color: ${({theme}) => theme.COLORS.WHITE};
}

`