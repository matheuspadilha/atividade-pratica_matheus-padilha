/**
 * matheus.padilha
 */

import { Component } from '@angular/core';

/**
 * import arquivo com a lista de alunos
 */
import { alunos } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-pratica_matheus-padilha';
  lista_alunos = alunos;
}
