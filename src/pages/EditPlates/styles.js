import styled from "styled-components";
const media = {
  desktop: '@media(min-width:1000px)'
}
export const Container = styled.div`
.buttons{
  display: flex;
  margin-block: 30px;
}
.buttons :first-child{
 width: 30%;
}
>form{
  margin: 32px 120px auto 120px;

}
>form div #plate_image_div label{
  display: block;

  width: 100%;
  height: 56px;
  padding: 20px;

  border:1px solid #FFFFFF;
  border-radius: 5px;
}
>form div #plate_image_div #plate_image{
  opacity: 0;
  position: absolute;
  z-index: -1;
}
>form div #plate_image_div h1,
form h1{
  color: ${({theme}) => theme.COLORS.GENERAL_TEXT};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif ;
}
>form div #plate_image_div{
  width: 300px;
  height: 56px;
  position: relative;
}



>form .line_1{
  display: flex;
  flex-direction: row;
  gap: 32px;
}
>form .line_1 #name{
  width: 100%;
}
>form .line_2{
  display: flex;
  flex-direction: row;
  gap: 32px;
  >.checkbox{
    width: 30%;
  }
}

>form textarea{
  color:${({theme}) => theme.COLORS.ORDER_TITLE};;
  background-color: transparent;

  border:1px solid #FFFFFF;
  height:172px;
  border-radius:5px;
  width: 100%;
  resize: none;

  padding: 12px;
}
>form textarea::placeholder{
  color:${({theme}) => theme.COLORS.INPUT_TEXT_PLACEHOLDER};
}
#main_title{
  font-size: 32px;
  font-family: 'Poppins';
  color: ${({theme}) => theme.COLORS.ORDER_TITLE};
  margin-block: 20px;
}
#add_plate_button{
  background-color: #FFFFFF1A;
  opacity: 0.8;
  border: 1px solid #FFFFFF;
  border-radius: 5px;

  width: 357px;

  margin-left: auto; 
  margin-right: 0;
}

//                aqui vou fazer o css do dropbox

>form .line_2 .checkboxes{
  overflow-y: scroll;
  height: 70px;
  z-index: 2;
}
>form .line_2 .checkboxes label{
  display: block;
}
#category{
  margin-block: 10px;
  width: 200px;
  height: 36px;
  background-color: lightblue;

}
`