import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public enabledButton: boolean = true;
    public submitted: boolean;

    public loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(4)]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    /**
     * Constructor
     *
     * @param loginService LoginService
     * @param router Router
     */
    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    /**
     * Return form controls
     */
    get f() { return this.loginForm.controls; }

    /**
     * onSubmit
     *
     * Submit login form
     */
    public onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.loginService.login();
        this.router.navigate(['/']);
    }

}
