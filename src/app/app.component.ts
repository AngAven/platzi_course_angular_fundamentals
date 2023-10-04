import {Component} from '@angular/core';
import {Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angelin'
  age = 89
  image = 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3987&q=80';
  buttonDisabled = true
  max = 100

  names: String[] = ['Chuy', 'Amparo', 'Pepito']
  newName = ''
  products : Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: '../assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '../assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: '../assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: '../assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: '../assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: '../assets/images/glasses.jpg'
    }
  ]

  person = {
    name: '',
    age: 9,
    avatar: 'https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3987&q=80'
  }

  toggleButton() {
    this.buttonDisabled = !this.buttonDisabled
  }

  increaseAge() {
    this.person.age += 1
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement
    console.log('element => ', element)
    console.log(element.scrollTop)
  }

  onKeyup(event: Event) {
    const element = event.target as HTMLInputElement
    console.log('element.value => ', element.value)
    this.person.name = element.value
  }

  addName(){
    this.names.push(this.newName);
    this.newName = ''
  }

  deleteName(i: number){
    this.names.splice(i, 1)
  }
}
