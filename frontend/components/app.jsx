import React from 'react';
import Home from './home/home';
import { Route, HashRouter } from 'react-router-dom';
import LogIn from './session/log_in';
import SignUp from './session/sign_up';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';
import SearchWithFiltersContainer from './search/search_with_filters_container';
import ProductForm from './product/product_form';
import ProductShow from './products/product_show';
import SettingsContainer from './settings/settings_container';
import UserProfileContainer from './user/user_profile_container';

 /* <Route exact path="/login" component={} />
            <Route exact path="/signup" component={} />
            <Route exact path="/users/:userId" component={} />
            <Route exact path="/users/:userId/:productId" component={} /> */

export default function App({store}) {
    return (
        <>  
            <NavBarContainer />
            <AuthRoute exact path="/login" component={ LogIn } />
            <AuthRoute exact path="/signup" component={ SignUp } />
            <Route exact path="/" component={ Home } />
            <Route exact path="/search" component={ SearchWithFiltersContainer } />
            <Route exact path="/users/:userId" component={ UserProfileContainer } />
            <ProtectedRoute exact path="/settings" component={ SettingsContainer } />
            <ProtectedRoute exact path="/product/create" component={ProductForm} />
            <Route exact path={`/products/:productId`} component={ProductShow} />
        </>
    )    
}