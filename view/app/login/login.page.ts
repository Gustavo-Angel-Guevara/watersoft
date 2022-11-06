import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public alertController: AlertController
  ) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
  crearCuenta() {
    this.router.navigate(['/registro'])
  }

  async iniciarSecion(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      this.router.navigate(['/menu'])
    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Verifica tu usuario y contraseña.',
        buttons: ['OK'],
      }
      );

      await alert.present();
      
      return;
    }
  }
}
