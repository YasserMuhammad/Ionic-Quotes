import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../data/data.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup: {category: string, quote:Quote[] , icon:string};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;    
  }
}
