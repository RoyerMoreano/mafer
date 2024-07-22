import { Routes } from "@angular/router";
import {LoginComponent} from "./login/login.component"
import{ShopingComponent}from "./shoping/shoping.component"

export const USER_ROUTES: Routes=[
    
    {path: '',component: LoginComponent},
    {path: 'shoping', component:ShopingComponent}

]