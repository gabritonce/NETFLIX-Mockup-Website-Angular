import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ListaUtentiComponent } from './components/lista-utenti/lista-utenti.component';
import { AuthGuard } from './auth/auth.guard';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const rotte: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'movies',
        component: MoviesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'movies/:id',
        component: MovieDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'utenti',
        component: ListaUtentiComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'details',
                component: DetailsComponent
            },
            {
                path: 'favorites',
                component: FavoritesComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        component: Error404Component
    }
]

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent,
        ProfileComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DetailsComponent,
        FavoritesComponent,
        ListaUtentiComponent,
        MovieDetailsComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(rotte),
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
