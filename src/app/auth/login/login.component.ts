import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private authSrv: AuthService, private router: Router) {}

    ngOnInit(): void {}

    accedi(form: NgForm) {
        console.log(form.value);
        try {
            this.authSrv.login(form.value).subscribe();
            alert('Login effettuato!');
            setTimeout(() => {
                this.router.navigate(['/movies']);
            }, 500);

        } catch (error) {
            alert('Login errato');
            console.error(error);
            this.router.navigate(['/login']);
        }
    }
}
