import styled from "styled-components";

export const Container = styled.div`
>main{
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
>main p{
  margin-top: 35px;
  cursor: pointer;
  transition: filter 0.2s;
}
>main p:hover{
  filter: opacity(50%);
}
>main a{
  color: ${({theme}) => theme.COLORS.GENERAL_TEXT};
}
`