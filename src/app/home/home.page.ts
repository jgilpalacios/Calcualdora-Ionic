import { Component } from '@angular/core';
import { RomanoService } from '../services/romano.service';
import { FactorizaService } from '../services/factoriza.service';

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
  estaEnRomano: boolean =false;
  estaFactorizado: boolean=false;
  valorArabigo: string ='';
  constructor(public romanoService:RomanoService, public factorizaService:FactorizaService) {}

  muestra ( t){

    if (t in ['0','1','2','3','4','5','6','7','8','9']){
      if(this.estaFactorizado||this.estaEnRomano){
        this.resultado=this.valorArabigo;
        if(this.estaFactorizado) this.estaFactorizado=!this.estaFactorizado;
        if(this.estaEnRomano) this.estaEnRomano=!this.estaEnRomano;
      }

      if(this.modo===0){
        if(!(this.resultado==='' && t==='0')) this.resultado+=t;
      }else{
        this.modo=0;
        this.resultado='';
        if(!(this.resultado==='' && t==='0')) this.resultado+=t;
      }
    }else if (t === '+' || t === '-' || t === 'x' || t === '/' || t === '='){
      if(this.estaFactorizado||this.estaEnRomano){
        this.resultado=this.valorArabigo;
        if(this.estaFactorizado) this.estaFactorizado=!this.estaFactorizado;
        if(this.estaEnRomano) this.estaEnRomano=!this.estaEnRomano;
      }
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
      this.estaEnRomano=false;
      this.estaFactorizado=false;
      this.resultado="";
      this.acumulado=0;
      this.modo=0
      this.operador='';
    }else if(t==='C'){
      this.resultado="";
      this.estaEnRomano=false;
      this.estaFactorizado=false;
    }else if(t==='√'){
      if(this.estaFactorizado||this.estaEnRomano){
        this.resultado=this.valorArabigo;
        if(this.estaFactorizado) this.estaFactorizado=!this.estaFactorizado;
        if(this.estaEnRomano) this.estaEnRomano=!this.estaEnRomano;
      }
      this.resultado=Math.floor(Math.sqrt(this.resultado*1));
    }else if(t==='+/-'){
      if(this.estaFactorizado||this.estaEnRomano){
        this.resultado=this.valorArabigo;
        if(this.estaFactorizado) this.estaFactorizado=!this.estaFactorizado;
        if(this.estaEnRomano) this.estaEnRomano=!this.estaEnRomano;
      }
      this.resultado=''+(-1*this.resultado);
      if(this.resultado==='0')this.resultado='';
    }else if(t==='R'){
      if(this.estaFactorizado){
        this.resultado=this.valorArabigo;
        this.estaFactorizado=!this.estaFactorizado;
      }
      if(!this.estaEnRomano){
        this.valorArabigo=this.resultado
        this.resultado=this.romanoService.genera(this.resultado);
      }else {
        this.resultado=this.valorArabigo;
      }
      this.estaEnRomano=!this.estaEnRomano;
    }else if(t==='f|'){
      if(this.estaEnRomano){
        this.resultado=this.valorArabigo;
        this.estaEnRomano=!this.estaEnRomano;
      }
      if(this.estaFactorizado){
        this.resultado=this.valorArabigo;
      }else{
        this.valorArabigo=this.resultado;
        this.resultado=this.factorizaService.factoriza(this.resultado);
      }
      this.estaFactorizado=!this.estaFactorizado;
    }
  }
}


