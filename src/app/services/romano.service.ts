import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanoService {
  base=['M','C','X','I'];
  auxiliar=['','D','L','V'];
  constructor() { }

  genera(valor:string){
    if( parseInt(valor)>3999) return 'ERROR: DEMASIADO GRANDE';
    else if ( parseInt(valor)<1) return 'ERROR: DEMASIADO PEQUEÑO';
    
    let paso: number = 0;
    let inicial: number = parseInt(valor);
    let resto: number = inicial;
    let resultado: string = '';
    let grado=1000;
    do{
      let conv=Math.floor(resto/grado);
      //alert(conv)
      switch(conv){
        case 0:break;
        case 1: resultado+=this.base[paso];break;
        case 2: resultado+=this.base[paso]+this.base[paso];break;
        case 3: resultado+=this.base[paso]+this.base[paso]+this.base[paso];break;
        case 4: resultado+=this.base[paso]+this.auxiliar[paso];break;
        case 5: resultado+=this.auxiliar[paso];break;
        case 6: resultado+=this.auxiliar[paso]+this.base[paso];break;
        case 7: resultado+=this.auxiliar[paso]+this.base[paso]+this.base[paso];break;
        case 8: resultado+=this.auxiliar[paso]+this.base[paso]+this.base[paso]+this.base[paso];break;
        case 9: resultado+=this.base[paso]+this.base[paso-1];break;
      }
      resto=resto-conv*grado;
      paso++;
      grado=grado/10;
    }while(resto>0);
    return(resultado);
  }
}
