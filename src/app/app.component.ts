import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-proj';
    getName(name){
      console.log(name);
      return name;
    }
  getN(par){
    console.log(par);
    return par;
  }
  onKeydown(event) {
    if (event.key === "Enter") {
      console.log(event);
    }
  }
}
    