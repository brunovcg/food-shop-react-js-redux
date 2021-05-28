import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height: 15vh;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 1px 4px 4px rgba(0,0,0,0.3);

    .homeButton{
        width: 15%;
    }

    h1 {
        color: #3AA5CD;
        width: 50%;
        font-size: 3rem;
        font-variant: small-caps;
    }

    .cartButton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;

        div{
            margin-left: 10px;
        }
    }
   

`
    