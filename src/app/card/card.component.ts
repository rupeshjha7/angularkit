import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardTitle: string;
  cardText: string;
  cardImgTop: string;
  cardStyle: string;
  cardBtnText:string;
  cardHeader:string;
  cardTitle1:string;

  constructor() { }

  ngOnInit() {
    this.cardTitle = "Card Title";
    this.cardText = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    this.cardImgTop = "https://via.placeholder.com/200x100";
    this.cardStyle = "width: 18rem";
    this.cardBtnText = "Go somewhere";
    this.cardHeader = "Header";
    this.cardTitle1 = "Dark card title";

  }

}
