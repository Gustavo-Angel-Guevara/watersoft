import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  tipoUsuario = ['Administrador', 'Técnico'];

  constructor( private router: Router, public fb: FormBuilder, public alertController: AlertController) {

      this.formularioRegistro = this.fb.group({
        'nombre': new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required),
        // 'confirmarPassword': new FormControl("", Validators.required),
        
      });
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/login'])
  }

  async guardar(){
    var f = this.formularioRegistro.value;
    
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Llena todos los campos',
        buttons: ['OK'],
      }
      );

      await alert.present();
      
      return;
      
    }else{
      const alert = await this.alertController.create({
        header: 'WaterSoft',
        message: 'Has sigo agregado correctamente',
        buttons: ['OK'],
      }
      );
      await alert.present();
      this.router.navigate(['/menu']);
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password 
    }
    localStorage.setItem('nombre',JSON.stringify(usuario));
    
  }

}


