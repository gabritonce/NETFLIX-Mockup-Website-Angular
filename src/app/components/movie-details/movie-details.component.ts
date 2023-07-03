import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {

    film!: Movie;
    id!: number
    imageURL = environment.imageURL;

    constructor(private movieSrv: MoviesService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.params.subscribe(parametro => {
            this.id = +parametro['id'];
            this.dettagliFilm();
        });
    }

    dettagliFilm() {
        this.movieSrv.dettaglioFilm(this.id).subscribe(_film => {
            this.film = _film;
        });
    }}
