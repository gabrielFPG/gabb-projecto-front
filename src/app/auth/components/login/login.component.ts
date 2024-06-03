import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService=inject(AuthService)

  LoginForm=new FormGroup({
    email:new FormControl("", [Validators.email, Validators.required]), //valores que quedan por defecto....en la clase
    password:new FormControl("", Validators.required)
  })

  funIngresar(){
    this.authService.loginConNest(this.LoginForm.value).subscribe(
      (res)=>{
        console.log(res)
      },
      (error)=>{
        console.log(error)
      }
    )
    //alert("ingresando....")
  }
}
