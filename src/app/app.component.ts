import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Aula de Services</h1>
    <hr />
    <app-card></app-card>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'service';
}
