import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}

enteredSearchValue: string = '';

@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

onSearchTextChanged(event: any){
  this.enteredSearchValue = event.target.value;
  this.searchTextChanged.emit(this.enteredSearchValue);
}

}
