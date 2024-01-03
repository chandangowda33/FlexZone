import { Component } from '@angular/core';
import { SignInService } from '../sign-in/sign-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private signIn: SignInService) {}

  openSIgnin: boolean = this.signIn.signIn;
  onSelect() {
    this.openSIgnin = true;
  }
}
