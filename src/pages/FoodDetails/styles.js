import styled from "styled-components";

export const Container = styled.div`
width: 100vw;

min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
>main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  >img{
    
    width: 10vw;
    object-fit: cover;

  }


  >#ingredients{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
}

`