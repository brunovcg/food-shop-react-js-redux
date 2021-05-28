// import { useEffect } from 'react';
import CartCard from '../../components/CartCard';
import SubtotalBox from '../../components/Subtotal';
import {CheckoutBox} from './styles';
import { useSelector } from 'react-redux';



export const Checkout = () => {

    const cart = useSelector((store)=> store.cart)

    const products = JSON.parse(localStorage.getItem("cart")) || [];

  

  


    return(
        <CheckoutBox>
            <h2>Carrinho</h2>

            <div className="cartContainer">
                <div className="productCartList">
                  {cart.map((item)=>(<CartCard key={item.id} product={item}/>))}  
           
                </div>
                <div className="subtotalBox">
                    <SubtotalBox products={products}/>
                </div>
            </div>



        </CheckoutBox>
    )
}