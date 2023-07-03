import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utente } from '../models/utente';

@Injectable({
    providedIn: 'root',
})
export class UtentiService {

    baseURL = environment.baseURL;

    constructor(private http: HttpClient) {}

    recuperaUtenti() {
        return this.http.get<Utente[]>(`${this.baseURL}users`)
    }
}
