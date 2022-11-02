import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height: 48px;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

background-color: ${({theme}) => theme.COLORS.INCLUDE_BUTTON};
color: ${({theme}) => theme.COLORS.WHITE};

border-radius: 5px;

font-size: 14px;
font-family: "Poppins",sans-serif;
font-weight: 500;

>svg{
  margin-right: 8px;
}
`