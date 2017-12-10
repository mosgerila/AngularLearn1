import { Component, OnInit,ElementRef, ViewChildren, DoCheck,Renderer2, AfterViewInit,QueryList } from '@angular/core';
//import { QueryList } from '@angular/core/src/linker';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  arr:Number[]=new Array();
  
  @ViewChildren('tabrow') elementView: QueryList<'tabrow'>;
  
  viewHeight: number

  constructor(private _renderer: Renderer2) {
    
  
    for (let i:number=9; i<20; i++){
       this.arr.push(i);
       for (let j:number=0; j<3; j++)
       this.arr.push(null);

    }
   }
  
   ngAfterViewInit(){
    const buttonElement = this._renderer.createElement('button');
    const text = this._renderer.createText('Text');
    this._renderer.addClass(buttonElement,'buttonstyle');
    //this._renderer
    this._renderer.appendChild(buttonElement, text);
    this._renderer.appendChild(this.elementView.toArray()[1].nativeElement.cells[1], buttonElement);
    console.log(this.elementView.toArray()[0]);
  }

  ngOnInit() {
    
    
  }

  ngDoCheck(){
    
   // this.viewHeight = this.elementView.nativeElement.parentNode.offsetWidth;
    
   // console.log(this.viewHeight);
  }

 

}
