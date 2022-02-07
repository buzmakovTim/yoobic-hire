import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  emailInputValue = '';
  passwordInputValue = '';

  constructor(
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  loginValidator(){
    // email should have @ and both email and password should not be an empty string
    if(this.passwordInputValue === '' || !this.emailInputValue.includes('@')){

      // Show Invalid Input alert
      this.alertCtrl.create({
        header: 'Invalid Input',
        message: 'Please enter valid email and password',
        buttons: ['Ok']
      }).then(alertEl => {
        alertEl.present();
      });
      // Valid input redirect to movies-page
    } else {
      this.router.navigateByUrl('/movies-page');
      this.emailInputValue = '';
      this.passwordInputValue = '';
    }
  }

}
