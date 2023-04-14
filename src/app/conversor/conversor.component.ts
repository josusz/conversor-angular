import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent{
  valorInicial: number = 1;
  unidadeSelecionada: string = 'metro';
  valorConvertido: number = 0;
  unidadeConvertida: string = 'quilometro';

  converter(){
    if (this.unidadeSelecionada === "metro" && this.unidadeConvertida === "quilometro") {
      this.valorConvertido = this.valorInicial / 1000;
    } else if (this.unidadeSelecionada === "metro" && this.unidadeConvertida === "milha") {
      this.valorConvertido = this.valorInicial / 1609;
    } else if (this.unidadeSelecionada === "quilometro" && this.unidadeConvertida === "metro") {
      this.valorConvertido = this.valorInicial * 1000;
    } else if (this.unidadeSelecionada === "quilometro" && this.unidadeConvertida === "milha") {
      this.valorConvertido = this.valorInicial / 1.609;
    } else if (this.unidadeSelecionada === "milha" && this.unidadeConvertida === "metro") {
      this.valorConvertido = this.valorInicial * 1609;
    } else if (this.unidadeSelecionada === "milha" && this.unidadeConvertida === "quilometro") {
      this.valorConvertido = this.valorInicial * 1.609;
    } else {
      this.valorConvertido = this.valorInicial;
    }
  }
}