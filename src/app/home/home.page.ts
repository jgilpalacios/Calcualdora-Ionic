import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resultado: any="";
  acumulado: any=0;
  modo: number=0
  operador:string='';
  constructor() {}

  muestra ( t){

    if (t in ['0','1','2','3','4','5','6','7','8','9']){
      if(this.modo===0){
        if(!(this.resultado==='' && t==='0')) this.resultado+=t;
      }else{
        this.modo=0;
        this.resultado='';
        if(!(this.resultado==='' && t==='0')) this.resultado+=t;
      }
    }else if (t === '+' || t === '-' || t === 'x' || t === '/' || t === '='){
      if(this.operador===''){
        this.acumulado=this.resultado*1;
      }else if(this.operador==='+'){
        this.acumulado+=this.resultado*1;
        this.resultado=''+this.acumulado;
      }else if(this.operador==='-'){
        this.acumulado-=this.resultado*1;
        this.resultado=''+this.acumulado;
      }else if(this.operador==='x'){
        this.acumulado*=this.resultado*1;
        this.resultado=''+this.acumulado;
      }else if(this.operador==='/'){
        this.acumulado=Math.floor(this.acumulado/this.resultado*1);
        this.resultado=''+this.acumulado;
      }
  
      if(t==='+'){
        this.operador=t;
      }else if(t==='-'){
        this.operador=t;
      }else if(t==='x'){
        this.operador=t;
      }else if(t==='/'){
        this.operador=t;
      }else if (t==='='){
        this.resultado=''+this.acumulado;
        this.operador='';
      }
      this.modo=1;
    }else if(t==='AC'){
      this.resultado="";
      this.acumulado=0;
      this.modo=0
      this.operador='';
    }else if(t==='C'){
      this.resultado="";
    }else if(t==='√'){
      this.resultado=Math.floor(Math.sqrt(this.resultado*1));
    }
  }
}


