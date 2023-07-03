import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Favourite } from '../models/favourite';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {

    baseUrl = environment.baseURL;

    constructor(private http: HttpClient, private authSrv: AuthService) {}

    recuperaFavoriti(userId: number) {
        return this.http.get<Favourite[]>(`${this.baseUrl}favorites?userId=${userId}`);
    }

    recuperaFilm() {
        return this.http.get<Movie[]>(`${this.baseUrl}movies-popular`);
    }

    dettaglioFilm(id: number) {
        return this.http.get<Movie>(`${this.baseUrl}movies-popular/${id}`);
    }

    aggiungiFavorito(favorito: Favourite) {
        return this.http.post(`${this.baseUrl}favorites`, favorito);
    }

    rimuoviFavorito(favoritoId: number) {
        return this.http.delete(`${this.baseUrl}favorites/${favoritoId}`);
    }
}
