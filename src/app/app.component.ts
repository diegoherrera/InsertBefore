import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('contenedor') 
   private contenedor: ElementRef;	
   @ViewChild('hijo1') 
   private hijo1: ElementRef;	
  constructor(private elRef: ElementRef, private renderer: Renderer2) {     
  }

  onClickEvent() {
     //Creo el comentario a insertar
     const comment = this.renderer
     .createComment('Agrego un comentario de referencia');
    //inserto dentro del body 
     this.renderer.insertBefore(this.elRef.nativeElement.parentNode
      , comment, this.elRef.nativeElement );
     //referencia al padre de hijo1
     const parent = this.hijo1.nativeElement.parentNode;
     //antes que este este elemento
     const reference = this.hijo1.nativeElement; 
     //creo un texto
     const texto = this.renderer.createText("Hola mundo ");
     //inserto dentro del parent el texto pero antes de reference
     this.renderer.insertBefore(parent, texto, reference )

  }
}
