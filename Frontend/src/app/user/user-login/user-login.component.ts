import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  // loginForm = this.fb.group({
  //   email: [
  //     '',
  //     {
  //       validators: [Validators.required, Validators.email],
  //       updateOn: 'blur',
  //     },
  //   ],
  //   password: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.minLength(8),
  //       this.createPasswordStrenghtValidator(),
  //     ],
  //   ],
  // });
  // get email() {
  //   return this.loginForm.controls['email'];
  // }
  // get password() {
  //   return this.loginForm.controls['password'];
  // }

  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {}
  // createPasswordStrenghtValidator():ValidatorFn {
  //   return (control:AbstractControl): ValidationErrors | null => {
  //     const value = control.value;
  //     if(!value){
  //       return null;
  //     }
  //     const hasUpperCase = /[A-Z]+/.test(value);
  //     const hasLowerCase = /[a-z]+/.test(value);
  //     const hasNumeric = /[0-9]+/.test(value);
  //     const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
  //     return !passwordValid ? {passwordStrength: true}: null;
  //   }
  // }
  constructor(private authService: AuthService, private alterify : AlertifyService, private router:Router){}
  ngOnInit(){}
  onLogin(loginForm: NgForm){
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName);
      this.alterify.success('login successful');
      this.router.navigate(['/']);

    }else{
      this.alterify.error('invalid username/password');

    }
  }
}
