import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/auth/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { Favourite } from 'src/app/models/favourite';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
    movies!: Movie[];
    imageURL = environment;
    utente!: Auth | null;
    favoriti!: Favourite[];

    constructor(
        private movieSrv: MoviesService,
        private authSrv: AuthService
    ) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_utente) => {
            this.utente = _utente;
        });
        setTimeout(() => {
            this.recuperaFavoriti(this.utente!.user.id);
            this.recuperaFilm();
        }, 1500);
    }

    recuperaFilm(): void {
        this.movieSrv.recuperaFilm().subscribe((films: Movie[]) => {
            this.movies = films;
        });
    }

    recuperaFavoriti(userId: number): void {
        this.movieSrv
            .recuperaFavoriti(userId)
            .subscribe((likes: Favourite[]) => {
                this.favoriti = likes;
            });
    }

    aggiungiFavorito(idFilm: number): void {
        const favorito: Favourite = {
            userId: this.utente!.user.id,
            movieId: idFilm,
        };

        this.movieSrv.aggiungiFavorito(favorito).subscribe(() => {
            this.recuperaFavoriti(this.utente!.user.id);
        });
    }

    eliminaFavorito(film: Movie): void {
        const idFav = this.getIdFavorito(film);
        if (idFav) {
            this.movieSrv.rimuoviFavorito(idFav).subscribe(() => {
                this.recuperaFavoriti(this.utente!.user.id);
            });
        }
    }

    isFavorito(film: Movie): boolean {
        return this.favoriti.some((f) => f.movieId === film.id);
    }

    getIdFavorito(film: Movie): number | undefined {
        const favorito = this.favoriti.find((f) => f.movieId === film.id);
        return favorito?.id;
    }
}
