import styled from "styled-components";

export const Container = styled.div`
>main table tbody tr td,
main table thead th{
padding: 15px;
border-color: #192227;
  border-width: 2px;
  border-style: solid;
}
>main table thead th:first-child{
  padding-inline:0px;
}
>main{
  padding: 30px 50px 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

}
>main table{

  border-collapse: collapse;
  border-color: ${({theme}) => theme.COLORS.TABLE_BORDER} ;
  border-width: 2px;
  border-style: solid;
}


>main table tbody tr td div img{
  height: 32px;
  width: 32px;


}


>main table tbody tr td div{
  display: flex;
  align-items: center;
  justify-content: center;
}
>footer{
  margin-top: 80px;
}
`