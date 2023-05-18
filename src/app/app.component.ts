import { Component } from '@angular/core';
import { ThemeService } from './theme.service'; // Importando um serviço chamado 'ThemeService'. O caminho relativo indica que este serviço está no mesmo diretório que este arquivo de componente.

@Component({ // A anotação @Component é usada para marcar uma classe como um componente Angular.
  selector: 'app-root', // O seletor é o nome da tag personalizada que este componente representa. No HTML, este componente será usado como <app-root>.
  templateUrl: './app.component.html', // O templateUrl é o caminho relativo para o arquivo HTML que representa a view deste componente.
  styleUrls: ['./app.component.css'] // Os styleUrls são os caminhos relativos para os arquivos CSS que possuem os estilos para este componente.
})
export class AppComponent { // Essa é a declaração da classe do componente.
  title = 'thema'; // Esta é uma propriedade do componente.

  constructor(public themeService: ThemeService) { } // Este é o construtor do componente, que é usado para injeção de dependência. Neste caso, o serviço 'ThemeService' é injetado no componente.

  toggleTheme() { // Este é um método que chama a função 'toggleTheme' do serviço 'ThemeService'.
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean { // Este é um método que retorna se o tema atual é escuro ou não.
    return this.themeService.isDarkTheme();
  }
}
