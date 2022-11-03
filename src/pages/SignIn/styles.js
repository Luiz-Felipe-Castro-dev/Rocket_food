import styled from "styled-components";


const media = {
  desktop: '@media(min-width:1000px)'
}

export const Container = styled.div`
height: 100vh;
max-width: 100vw;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${media.desktop}{
  flex-direction: row;
  gap: 250px;
}
>#logo{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 19px;

padding-top: 30px;
margin-bottom: 30px;


}
`;

export const Form = styled.form`
padding-block: 0;
padding-inline: 5%;
padding-bottom: 20px;
margin-inline: 7%;
margin-block: 3px;
border-radius: 16px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

text-align: left;

background-color: ${({theme}) => theme.COLORS.SIGN_UP_BACKGROUND};

${media.desktop}{
  width: 600px;
  margin-inline: 0;
}
>h1{
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  margin-block: 32px;
}
#buttonText{
  margin-block: 32px;
}

`