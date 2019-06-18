import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public alertController: AlertController) { }

  async presentAlert(alertObject: any) {
    const alert = await this.alertController.create({
      header: alertObject.header,
      message: alertObject.message,
      buttons: alertObject.buttonText ? [alertObject.buttonText] : ['Ok']
    });

    await alert.present();
  }
}
