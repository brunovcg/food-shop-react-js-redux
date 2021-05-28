import styled from "styled-components";


export const CheckoutBox = styled.div`

    h2{
        color: #C84C62;
        font-variant: small-caps;
        font-size: 30px;
        background-color: white;
        width: 200px;
        margin: 20px auto;
        box-shadow: 1px 4px 4px rgba(0,0,0,0.3);
        border-radius: 10px;

    }

    .cartContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        

        .productCartList{
            display: flex;
            flex-direction: column;
            width: 65%;
        }

        .subtotalBox{
            width: 30%;
            height: 250px;
            display: flex;
            
        }

    }

`