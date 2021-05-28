import ProductCard from '../../components/ProductCard';
import {ProductBox} from './styles';
import { useSelector } from 'react-redux';



export const Home = () => {

    const products = useSelector((store)=> store.products)


    return(
        <ProductBox>
            <h2>Bem vindo e bom apetite!</h2>

                <div className="productList">
                   
                    {products.map((product)=>(
                        <ProductCard key={product.id} product={product}/>

                    ))}

                </div>
        
        </ProductBox>
    )
}