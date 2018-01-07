import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../data/data.interface';
import quotes from '../data/quotesData';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  quoteCollection: {category: string, quote:Quote[] , icon:string}[];
  quotesPage = QuotesPage;
  ngOnInit(){
    this.quoteCollection = quotes;
    console.log(this.quoteCollection)
  }
}
