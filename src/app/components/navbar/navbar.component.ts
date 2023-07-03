import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    utente!: Auth | null;

    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_utente) => {
            this.utente = _utente;
        });
    }

    logout() {
        this.authSrv.logout();
    }
}
