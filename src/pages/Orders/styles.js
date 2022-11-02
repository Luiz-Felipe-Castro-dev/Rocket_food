import styled from "styled-components";



export const Container = styled.div`

min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;

>main table tbody tr td,
main table thead th{
padding: 15px;
border-color: #192227;
  border-width: 2px;
  border-style: solid;
}
>main{
  padding: 30px 50px 0px 50px;
  overflow-y: scroll;
  /* it doesn't work as expected overflow-y: scroll; */
}
>main table{
  width: 100%;
  border-collapse: collapse;
  border-color: ${({theme}) => theme.COLORS.TABLE_BORDER} ;
  border-width: 2px;
  border-style: solid;
}


>main table tbody tr td div span{
  height: 8px;
  width: 8px;
  display: inline-block;
  border-radius: 50%;
}


>main table tbody tr td div{
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
}
`