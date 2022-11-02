import styled from "styled-components";

const media = {
  desktop: '@media(min-width:1000px)'
}

export const Container = styled.div`
background: ${({theme}) => theme.COLORS.HEADER_BACKGROUND};


width: 100%;

display: flex;
flex-direction: column;
justify-content: center ;

align-items: center;

${media.desktop}{
  flex-direction: row;
  justify-content: unset;
}
>div div input{
  color:${({theme}) => theme.COLORS.ORDER_TITLE};
  background-color: transparent;

  border: none;
  height:56px;
  width: 100%;

  padding: 12px;
  height: 48px;
}
>div div input::placeholder{
  color:${({theme}) => theme.COLORS.INPUT_TEXT_PLACEHOLDER};
}
>div #input{
  display: flex;
  align-items: center;

  border:1px solid #FFFFFF;
  border-radius:5px;
  
  height:56px;
  padding-left: 20px;
}
>div.hidden{
  display: none;
  >input{
    display: block;
  }
}
>#logo_link{
  ${media.desktop}{
    display: flex;
    height: 80px;
  }
}
>div#header{
  width: 100%;

  gap: 10px;
  ${media.desktop}{
    width: auto;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 55px;
    margin-left: 48px;
  }
}
>div#header .exit{
  margin-left: -30px;
}
>div.expanded{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
>a{
  text-decoration: none;
  color: ${({theme}) => theme.COLORS.GENERAL_TEXT};
  ${media.desktop}{
    margin-left: 90px;
  }
}
>a #logo{
  display: flex ;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
} 
>#close.expanded{
  display: block;
  position: absolute;
  top: 0;
  right: 0;
}
>#close.hidden{
  display: none;

}
>#open.expanded{
  display: block;
  position: absolute;
  top: 0;
  right: 0;
}
>#open.hidden{
  display: none;
}
/* desktop version */
>#open#open,#close#close{
  ${media.desktop}{
    display: none;
  }
}
#order div{
  width: 216px;
}
`