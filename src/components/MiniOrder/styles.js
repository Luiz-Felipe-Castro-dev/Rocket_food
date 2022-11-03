import styled from "styled-components";

export const Container= styled.div`
>.flex{
  display: flex;
  margin-bottom: 30px;
}
>.flex img{
  width: 72px;
  height: 72px;
  margin-right: 13px;
}
>.flex .info{

}
>.flex .info h2{
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.ORDER_TITLE};
}
>.flex .info p{

  color: ${({theme}) => theme.COLORS.DELETE_BUTTON};
}
>.flex .info h2 span{
  font-size: 12px;
  color: ${({theme}) => theme.COLORS.GENERAL_TEXT};
  font-weight: 400;
}
`