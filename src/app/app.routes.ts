import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [

    { path: '', component: Home },
    // { path: 'search', component: SearchPage },
    // { path: 'movies', component: MoviesPage },
    // { path: 'series', component: SeriesPage },
    { path: '**', redirectTo: '' } // redirige si no encuentra la ruta
];
