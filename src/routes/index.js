import { Switch, Route } from 'react-router-dom'
import {Home} from '../pages/Home' 
import {Checkout} from '../pages/Checkout' 
import {NotFound} from '../pages/NotFound'
import Payment from '../pages/Payment'


const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/checkout">
                <Checkout/>
            </Route>
            <Route path="/payment">
                <Payment/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    )
}

export default Routes