import { Routes } from "@angular/router";
import{ShopgetallComponent}from "./shopgetall/shopgetall.component"
import{CargetallComponent} from"./car-shop/cargetall/cargetall.component"
import{CardeleteComponent}from "./car-shop/cardelete/cardelete.component"
import {CategoriaComponent}from "./categoria/categoria.component"
export const SHOP_ROUTES: Routes=[
    
    {path: '',component: ShopgetallComponent},
    {path:'car',component: CargetallComponent},
    {path: 'delete',component: CardeleteComponent},
    {path: 'categoria',component:CardeleteComponent}

]