import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  description: string = 'Angular class taking place @pmt';
  isClassEnded: boolean = false;
  numberOfStudents:number = 10;
  name: string = 'onwe joseph';
  age: number = 23;
  userName: string = '';
  showMenu: boolean = false;
  Dishes: Array<string> = [
    'beans and bread',
    'draw soup',
    'noodles and egg',
    'moimoi',
    'Abacha'
  ]

  toggleMenu(): void {
    this.showMenu = !this.showMenu
  }
}
