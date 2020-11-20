import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){

    if(!form.valid){
      return;
    }

    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode){
      authObs = this.authSerice.login(form.value.email, form.value.password);
    }
    else{
      authObs = this.authSerice.signup(form.value.email, form.value.password);
    }

    authObs.subscribe(
      response => {
        this.router.navigate(['/recipes']); 
        this.isLoading = false;
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
    
    form.reset();
  }
  

  constructor(private authSerice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
