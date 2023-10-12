import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input()
  idPage: string = "0"
  
  constructor() { }

  ngOnInit(): void {
  }

}
