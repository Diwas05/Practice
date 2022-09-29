import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-Title';
  count=0;
  number1=0;
  number2=0;
  result=0;
  listofNumbers=[12,32,5,7,98,45];
  arr=["Diwas","Raj","Pranish"];
  increment = () => {
    this.count++;
  }
  decrement = () => {
    this.count--;
  }
  add = () => {
    this.result=Number(this.number1)+Number(this.number2);
  }
}
