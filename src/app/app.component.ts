import { Component } from '@angular/core';
import { SetOptional } from 'type-fest';

interface User {
  id: string,
  displayName: string,
}

type UserWithOptionalId = SetOptional<User, 'id'>;

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Typefest SetOptional issue</h1>
    <p>{{user.displayName}}</p>
  `,
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  readonly user: UserWithOptionalId = {
    displayName: 'Joe Bloggs'
  };

  constructor() {
    console.log(this.user.displayName);
  }
}
