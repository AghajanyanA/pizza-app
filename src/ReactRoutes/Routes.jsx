import {Route, Routes} from "react-router-dom";
import React from "react";
import Contacts from '../Components/Pages/Contacts/Contacts'
import Restaurants from "../Components/Pages/Restaurants/Restaurants";
import Restaurant from "../Components/Pages/Restaurant/Restaurant";
import Menu from "../Components/Pages/Menu/Menu";

const RenderRoutes = () => (
    <Routes>
        <Route path='/' element={ <Menu /> } />
        <Route path='/restaurants' element={ <Restaurants /> } />
        <Route path='/restaurants/:restaurantId' element={ <Restaurant /> } />
        <Route path='/restaurants/:restaurantId/menu' element={ <Menu /> } />
        <Route path='/contact' element={ <Contacts /> } />
        <Route path='/orders' element={'Test'} />
    </Routes>
)
export default RenderRoutes