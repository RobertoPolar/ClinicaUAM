import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == "admin" && password == "admin"){
      this.fakeloading();
    }else{
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña son invalidos','',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeloading(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      //redireccionar
    }, 3000);
  }

}
