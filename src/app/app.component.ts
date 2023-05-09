import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuOpened = false;

  listTitles = [
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardioes da galaxia 1',
      relevance: 98,
      age: 5,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'Viagem no espaco'],
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardioes da galaxia 2',
      relevance: 9,
      age: 10,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'Viagem no espaco'],
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardioes da galaxia 3',
      relevance: 80,
      age: 12,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'Viagem no espaco'],
    },
  ];

  setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }
}
