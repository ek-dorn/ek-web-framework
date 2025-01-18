import { Routes } from '@angular/router';

import { PageComponent } from './page/page.component';


export const routes: Routes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PageComponent }
];
