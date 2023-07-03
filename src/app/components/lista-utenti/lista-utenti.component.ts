import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente';
import { UtentiService } from 'src/app/service/utenti.service';

@Component({
    selector: 'app-lista-utenti',
    templateUrl: './lista-utenti.component.html',
    styleUrls: ['./lista-utenti.component.scss'],
})
export class ListaUtentiComponent implements OnInit {

    listaUtenti: Utente[] | undefined;

    constructor(private utentiSrv: UtentiService) {
        setTimeout(() => {
            this.utentiSrv.recuperaUtenti().subscribe((utenti: Utente[]) => {
                this.listaUtenti = utenti;
            });
        }, 1500);
    }

    ngOnInit(): void {}
}
