import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recommended: String = '';
  phone = {
    value : ''
  };

  selectedName?: String;
  name = "sudip";
  isUnchanged = true;
  condition = false;

  constructor() { }

  ngOnInit(): void {
  }

  patch(name: String){
    this.selectedName = name;
  }

  working(): any{
    console.warn('Test Button works!')
  }

  toggleDisabled(): any{
    const testButton = document.getElementById('testButton') as HTMLInputElement;
    testButton.disabled = !testButton.disabled;
    console.warn(testButton.disabled)
  }

  callPhone(phone: String){

  }

}
