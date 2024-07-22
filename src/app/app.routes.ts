import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'shop',loadChildren:()=>import('./page/shop/shop.routes').then(m=>m.SHOP_ROUTES)

    },
    {
        path:'user',loadChildren:()=>import('./page/user/user.routes').then(m=>m.USER_ROUTES)
    }
];
