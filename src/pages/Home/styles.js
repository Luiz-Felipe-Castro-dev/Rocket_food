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
  ${media.desktop}{

    position: absolute;
    width: 632px;
    height: 406px;
    bottom:0.1px;
    right: 536px;
  }
    
  
}
>main .head_food{
  ${media.desktop}{

    position: relative;
    height: 260px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 8px;
    /* border: 1px solid red; */
  }

  
}
>main .head_food h1,
main .head_food p{
  ${media.desktop}{

    
      margin-left: 597px;
      display: block;
  }

}
>main .head_food h1{
  ${media.desktop}{

    
      display: inline-block;
      margin-top: 87px;
  }
}
>main h1{
  ${media.desktop}{

    margin-top: 62px;
  }

}
.rec-pagination{
  ${media.desktop}{

    display: none;
  }

}
.rec-arrow{
  ${media.desktop}{

    background-color:transparent;
    box-shadow: none;
    color: white;
  }

}
.rec-arrow:hover{
  ${media.desktop}{

    color: white;
    background-color: transparent;
    box-shadow: none;
  }

}
`