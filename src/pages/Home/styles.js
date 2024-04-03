import styled from "styled-components";


const media = {
  desktop: '@media(min-width:1000px)'
}

export const Container = styled.div`
>main{
  ${media.desktop}{

    margin: 164px 124px 98px 124px;
  }
}
>main div #header_img{

  width: 90%;
  ${media.desktop}{

    position: absolute;
    width: 632px;
    height: 406px;
    bottom:0.1px;
    left: 1%;
  }
    
  
}
>main .head_food{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-block: 32px;
  ${media.desktop}{
    gap: unset;
    align-items: unset;
    justify-content: unset;

    position: relative;
    height: 260px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 8px;
    /* border: 1px solid red; */
  }

  
}
>main .head_food h1,
main .head_food p{
  padding-inline: 35px;
  ${media.desktop}{

    padding-inline: unset;
    margin-left: 597px;
    display: block;
  }

}
>main .head_food p{
  padding-inline: 55px;
  ${media.desktop}{
    padding-inline: unset;
  }
}
>main .head_food h1{
  ${media.desktop}{

    
      display: inline-block;
      margin-top: 87px;
  }
}
>main h1{
  margin-block: 40px;
  margin-left: 25px;
  ${media.desktop}{

    margin-top: 62px;
  }

}
.rec-pagination{
  display: none;


}
.rec-arrow{
  background-color:transparent;
    box-shadow: none;
    color: white;


}
.rec-arrow:hover{
  ${media.desktop}{

    color: white;
    background-color: transparent;
    box-shadow: none;
  }

}
>footer{
  margin-top: 100px;
  ${media.desktop}{
    margin-top: unset;
  }
}
`