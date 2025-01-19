import { Routes } from '@angular/router';

import { PageComponent } from './page/page.component';
import { ProjectBodyComponent } from './project-body/project-body.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'portfolio',
        pathMatch: 'full',
    },
    {
        path: 'portfolio',
        component: PageComponent,
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
];
