import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../helpers/authentication.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private fb:FormBuilder,
              private authService: AuthenticationService,
              private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    const val = this.form.value;

    if (val.email && val.password) {
 this.subscriptions.push(this.authService.login(val.email, val.password)
   .subscribe(
     () => {

       this.router.navigateByUrl('/dashboard');

     },
     (error)=>{


       Swal.fire(
         'Error in login!',
         `Error in login ${error.error.error}`,
         'error'
       )
     }
   ))
    }
  }


  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscriptions.map((element=>element.unsubscribe()));
  }

}
