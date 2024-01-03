import { Component } from '@angular/core';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private signIn: SignInService) {}

  onSelect() {
    console.log(this.signIn.signIn);
    this.signIn.signIn = false;
    console.log(this.signIn.signIn);
  }
}
