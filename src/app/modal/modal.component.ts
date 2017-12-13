import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() modalAberto: any;
  @Input() fotos: any[];
  @Input() fotoindex: number;

  ngOnInit() {
  }

  closeModal() {
    this.modalAberto.status = "none";
  }

  @HostListener('window:keydown', ['$event'])
  ketListeners(event: KeyboardEvent) {

    event.preventDefault();
    event.stopPropagation();
    
    if(event.keyCode == 27){
      this.closeModal();
    }

    if(event.keyCode == 39){
      this.incrementa();
    }

    if(event.keyCode == 37){
      this.decrementa();
    }
  }

  incrementa() {
    if(this.fotoindex < this.fotos.length - 1)
      this.fotoindex++;
  }

  decrementa(){
    if(this.fotoindex > 0)
      this.fotoindex--;
  }

}
