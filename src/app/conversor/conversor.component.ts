import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})

export class ConversorComponent {
moeda1!: number;
resp!: number;
moedaC!:number;
holder:string = 'Resultado';

converter(){
const moedaCalculada: number = parseInt(this.holder);

if(moedaCalculada == 1){
  this.resp = this.moeda1 * this.moedaC;
}
else if(moedaCalculada == 2){
  this.resp = this.moeda1 * this.moedaC;
}
else if(moedaCalculada == 3){
  this.resp = this.moeda1 * this.moedaC;
}
else{
  alert("Informe os valores")
}
{

}

}


}
