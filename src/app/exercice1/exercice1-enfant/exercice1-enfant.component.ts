import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public result:number;
  @Output() public refreshCount:EventEmitter<number>=new EventEmitter;
 

  constructor() { }

  ngOnInit() {
  }

  IncrementCompteur(){
    this.result=this.result + 1;
    this.refreshCount.emit(this.result);
  }

  DecrementeCompteur(){
    this.result=this.result - 1;
    this.refreshCount.emit(this.result);
    
  }
}
