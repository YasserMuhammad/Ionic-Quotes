import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { quoteObj } from '../data/data.interface';
import quotes from '../data/quotesData';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  quoteCollection: any;
  quotesPage = QuotesPage;
  ngOnInit(){
    this.quoteCollection = quotes;
    console.log(this.quoteCollection)
  }
}
