import styled from 'styled-components'

export const CartProductBox = styled.div`

background-color: white;
    width: 100%;
    max-width: 70vw;
    height: 150px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 1px 4px 4px rgba(0,0,0,0.3);

    figure{
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;

        img{
            height: 120px;
            width: 120px;
            border-radius: 4px;
        }
    }

    h3{
        width: 20%;
    }

    p{
        width: 20%;
        color: #C84C62;
        font-weight: bold;
    }
` 