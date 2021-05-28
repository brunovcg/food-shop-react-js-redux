import {Container} from './styles'
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Header = () =>{

    const history = useHistory()

    const handleNav = (path)=>{
        return history.push(path)
    }

    const cart = useSelector((store)=> store.cart)

    return(
       <Container>
            <div className="homeButton"> 
                <Button
                    onClick={()=>handleNav("/")}
                    variant="contained"
                    color="secondary"
                    size="medium"
                    >
                        home
                </Button>
            </div>

            <h1>Kenzie Food-Shop</h1>

            <div className="cartButton">
                <Button
                    onClick={()=>handleNav("/checkout")}
                    variant="contained"
                    color="primary"
                    size="medium"
                >
                    Carrinho
                </Button>

                <div>{`${cart.length} itens`}</div>
            </div>
       </Container>
    )
}