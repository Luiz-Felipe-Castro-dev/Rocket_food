import styled from "styled-components";

export const Container = styled.div`
>main{
  display: flex;
  gap: 50px;
  padding: 34px  196px 168px 123px;

}
>main .pedidos{
  width: 500px;
}
>main .pedidos h1{
  margin-bottom: 48px;
}
>main .pagamento .payment_table{
  width: 530px;
  height:  288px;
  border: 1px solid #FFFFFF1A;
  margin-top: 32px;

  border-radius: 8px 8px 0px 0px;
}
>main .pagamento .payment_table .pix,
main .pagamento .payment_table .credit_card{
  width: 50%;
  border: 1px solid #FFFFFF1A;
  display: inline-block;
  height: 81px;
}
>main .pagamento .payment_table .pix{
  border-radius: 8px 0 0 0;
}
>main .pagamento .payment_table .credit_card{
  border-radius: 0 8px 0 0;
}
>main .pagamento .payment_table div .cell{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
>main .pagamento .payment_table .window{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 207px;
}
>main .pagamento .payment_table .window svg,
main .pagamento .payment_table .window h2 {
  opacity: 0.4;
}
main .pagamento .payment_table .window h2{
  margin-top: 12px;
}
>main .pagamento .payment_table .window svg path{
  fill: ${({theme}) => theme.COLORS.WHITE}
}
`