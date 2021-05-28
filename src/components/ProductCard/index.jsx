import { CardBox } from './styles';
import Button from "@material-ui/core/Button";
import {useDispatch} from 'react-redux';
import {addCartThunk} from '../../store/modules/cart/thunks'

const ProductCard = ({product}) => {

        const dispatch = useDispatch();

        const {name, image, price} = product;

    return(
        <CardBox>
            <figure>
                <img src={image} alt="logo" />
            </figure>
            <h3>{name}</h3>
            <p>R$ {price}</p>
            <Button
                onClick={()=>dispatch(addCartThunk(product))}
                variant="contained"
                color="primary"
                size="medium"
            >
                Adicionar
            </Button>
        </CardBox>
    )
}

export default ProductCard
