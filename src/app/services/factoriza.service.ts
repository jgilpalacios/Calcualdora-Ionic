import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorizaService {

  constructor() { }

  factoriza= (num)=>{
    let lista='';
    let n=parseInt(num);
    if(n<1||n!==Math.floor(n)){
      return 'ERROR: Solo aplicable a numeros naturales'
    }else if (n===1){
      return '1';
    }else{
      let f=2;
      let lista='';
      while (n>1){
        if(n%f===0){ 
          (lista==='')?lista=''+f:lista+=','+f;
          n/=f;
        }else if(f<Math.sqrt(n)){//pasamos a otro posible divisor si no es primo
          if(f===2)f=3;//del 2 se pasa al tres
          else f+=2;//solo probamos impares;
        }else{ //es primo, lo enlistamos al final
          (lista==='')?lista=''+n:lista+=','+n;
          n=1;//ya se acaba n/n=1
        }
      }
      return lista;
    }
  }
}
