import styled from "styled-components";

export const Container = styled.div`

background: ${({theme}) => theme.COLORS.HEADER_BACKGROUND};

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;

width: 100%;
height: 70px;




>#logo{
  display: flex ;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color:  ${({theme})=> theme.COLORS.PALE_LOGO};;
  >svg{
    height: 30px;
    >path{
      fill: ${({theme})=> theme.COLORS.PALE_LOGO};
    }
  }
}
`