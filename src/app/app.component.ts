import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  curComponent = "Recipe";
  onNavigate(component: string){
    this.curComponent = component;
  }
}
