import styled from "styled-components";


export const ProductBox = styled.div`

    h2{
        color: #C84C62;
        font-variant: small-caps;
        font-size: 30px;
        background-color: white;
        width: 400px;
        margin: 20px auto;
        box-shadow: 1px 4px 4px rgba(0,0,0,0.3);
        border-radius: 10px;

    }

    .productList{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;  
        width: 100%;

        div{
            margin-right: 20px;
            margin-bottom: 20px;
        }

    

    }

`