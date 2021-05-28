import {Container} from './styles';
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';
import {emptyCartThunk} from '../../store/modules/cart/thunks';
import {useDispatch} from 'react-redux';



const SubtotalBox = ({products}) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const handleNav = (path) => {
        history.push(path)
    }

    // const handleClear = () => {
    //     localStorage.clear()
    // }

    const total = products.reduce((acc, prox)=> acc+prox.price,0)

    return(
        <Container>
           
            <h3>Subtotal</h3>
            <p>{`Preço R$ ${total} -`} <span>{`${products.length} itens`}</span>  </p>
            <Button
               onClick={()=> handleNav("/payment")}
               variant="contained"
               color="secondary"
               size="large"
            >
                Pagar
            </Button>

            <div className="esvaziar">
            <Button
                onClick={()=> dispatch(emptyCartThunk())}
                variant="contained"
                color="default"
                size="small"
                >
                    Esvaziar
                </Button>
            </div>
            
        </Container>
    )
}

export default SubtotalBox
