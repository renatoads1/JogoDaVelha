import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Mostra a tela de INICIO do jogo.
   * 
   * @return boolean
   */
  get showInicio() : boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Mostra a Tela do TABULEIRO.
   */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Mostra a tela FINAL.
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }
  
  /**
   * Inicilializa os dados do jogo.
   */
  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma joga ao clicar em alguma posição no tabuleiro.
   * 
   * @param posX 
   * @param posY 
   */
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna a se peca X pode ser exibida para a coordenada informada.
   * 
   * @param posX 
   * @param posY 
   * @returns 
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna a se peca O pode ser exibida para a coordenada informada.
   * 
   * @param posX 
   * @param posY 
   * @returns 
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcacao de vitoria deve ser exibida para a coordenada informada.
   * 
   * @param posX 
   * @param posY 
   * @returns 
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o numero do jogador a jogar.
   * 
   * @return number
   */
  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo.
   * 
   * @return void
   */
  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }

}
