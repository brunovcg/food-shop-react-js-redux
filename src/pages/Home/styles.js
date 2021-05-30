import styled from "styled-components";


export const ProductBox = styled.div`

    h2{
        color: #C84C62;
        font-variant: small-caps;
        font-size: 30px;
        background-color: white;
        width: 400px;
        margin: 20px auto 10px auto;
        box-shadow: 1px 4px 4px rgba(0,0,0,0.3);
        border-radius: 10px;
        padding: 5px;
    }
    
    h4{
        color: #32630A;
        background-color: white;
        box-shadow: 1px 4px 4px rgba(0,0,0,0.3);
        width: 350px;
        margin: 10px auto;
        border-radius: 10px;
        font-size: 12px;
        padding: 10px;

    }

    .productList{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;  
        width: 100%;
        margin: 0 auto;

        div{
            margin: 10px;
        }
    }
`