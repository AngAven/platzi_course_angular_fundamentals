import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angelin';
  age = 89;
  image = 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3987&q=80';
  buttonDisabled = true;
  max = 100;

  person = {
    name: 'Angelin 2',
    age: 20,
    avatar: 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3987&q=80'
  }

  toggleButton(){
    this.buttonDisabled = !this.buttonDisabled;
  }

  increaseAge(){
    this.person.age += 1
  }
}
