import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datalocal } from 'src/app/data/data.local';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = ""
  cardTitle: string = ""
  cardDescription: string = ""
  private id: string | null = "0"

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("idPage"))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = datalocal.filter(article => article.id == id)[0]

    this.photoCover = result.img
    this.cardTitle = result.title
    this.cardDescription = result.description

  }

}
