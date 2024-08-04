import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-dados';

  dadoIzquierda = 'img/dice1.png';
  dadoDerecha = 'img/dice4.png';
  numero1 = 1;
  numero2 = 2;

  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierda = 'img/dice' + this.numero1 + '.png';
    this.dadoDerecha = 'img/dice' + this.numero2 + '.png';
  }

}
