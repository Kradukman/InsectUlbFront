import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  user = {
    'email': '',
    'password': ''
  };
  token = 'emptyToken';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      'mail': new FormControl('admintest@ulb.ac.be', [Validators.email, Validators.required]),
      'password': new FormControl('password', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.loginFormGroup);
    this.user.email = this.loginFormGroup.controls.mail.value;
    this.user.password = this.loginFormGroup.controls.password.value;
    this.loginService.login(this.user.email, this.user.password).subscribe(
      data => {
        console.log(data);
        this.token = data.token;
      },
      error => {
        console.log(error);
      }
    );
  }
}
