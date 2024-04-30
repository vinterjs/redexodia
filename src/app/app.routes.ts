import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'novedades',
        loadChildren: () => import('./pages/noticias/noticias.route').then(m => m.NOTICIAS_ROUTE)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
