import { Routes } from '@angular/router';

import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ProjectBodyComponent } from './project-body/project-body.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'portfolio',
        pathMatch: 'full',
    },
    {
        path: 'portfolio',
        component: PortfolioPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'project1',
                pathMatch: 'full',
            },
            {
                path: ':project',
                component: ProjectBodyComponent,
            },
        ],
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
