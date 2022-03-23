import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  selectedName?: String;
  name = 'sudipto';
  location = 'bangalore'
  isUnchanged = true;


  fontSizePx = 16;

  constructor() { }

  ngOnInit(): void {
  }

  getName(){
    console.log(this.name);
    console.log(this.location);
  }

  handleEvent(){
    alert('this is a event handler')
  }

}
