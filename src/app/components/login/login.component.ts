import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: any;
  constructor(private router: Router, private formBuilder: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      pwd: ['', Validators.required]
    })
    this.users = [
      {id: 1, firstName: 'Aymen', lastName:'Madfai', email: 'aymen.madfai@gmail.com', password: '1234', Role: 'superAdmin'},
      {id: 1, firstName: 'Jhon', lastName:'wick', email: 'jhon.wick@gmail.com', password: 'abcd', Role: 'admin'},
      {id: 1, firstName: 'Sam', lastName:'Briggs', email: 'sam.briggs@gmail.com', password: '56789', Role: 'admin'}
    ]
  }
  login() {
    let user = this.checkUser(this.loginForm.controls.email.value, this.loginForm.controls.pwd.value);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
       this.router.navigate(['dashboard']);
     } else {
       this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> User does not exist', '', {
         disableTimeOut: true,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-warning alert-with-icon",
         positionClass: 'toast-top-center'
       });
     }
    
  }
  checkUser(email: any, pwd: any) {
    for (let user of this.users) {
      if (user.email === email && user.password === pwd) {
        return user
      }
      
    }
  }

}
