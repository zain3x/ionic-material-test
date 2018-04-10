import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-components',
  templateUrl: 'components.html',
})
export class ComponentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
s
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentsPage');
  }

}
