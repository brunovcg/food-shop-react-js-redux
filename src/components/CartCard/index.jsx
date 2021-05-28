import { CartProductBox } from './styles';
import Button from "@material-ui/core/Button";
import {useDispatch} from 'react-redux';
import {removeCartThunk} from '../../store/modules/cart/thunks'

const CartCard = ({product}) => {

    const dispatch = useDispatch();

    const {name, image, price, id} = product;

    return(
        <CartProductBox>
            <figure>
                <img src={image} alt="logo" />
            </figure>
            <h3>{name}</h3>
            <p>{`R$ ${price}`}</p>
            <Button
                onClick={()=>dispatch(removeCartThunk(id))}
                variant="contained"
                color="primary"
                size="medium"
            >
                Remover
            </Button>
        </CartProductBox>
    )
}

export default CartCard
